import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import { HTTP } from 'meteor/http';

export const Transactions = new Mongo.Collection('transactions');
// const app = express();

if (Meteor.isServer) {
  Meteor.publish('transactions', function (perPage) {
    return Transactions.find({}, { limit: perPage })
  });

  // Ref. https://forums.meteor.com/t/meteor-webapp-vs-picker-vs-simple-rest-for-rest-api/34034
  // Ref. https://hashnode.com/post/web-api-using-meteor-webapp-ciqgn0ukj0irtdd53uy12h6ia
  WebApp.connectHandlers.use('/api/transactions', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');

    if(req.method === 'POST') {

      const {
          client_url,
          client_rest_api_endpoint,
          client_transaction_id,
          bank_account,
          bank_no,
          bank_name,
          bank_short_name,
          amount,
          transferred_datetime,
          is_approved
      } = req.query;

      const _id = Transactions.insert(
        {
            client_url,
            client_rest_api_endpoint,
            client_transaction_id,
            bank_account,
            bank_no,
            bank_name,
            bank_short_name,
            amount,
            transferred_datetime,
            isApproved: false,
            userId: this.userId,
            createdAt: moment().valueOf(),
            updatedAt: moment().valueOf()
        }
      );

      if(_id) {
        res.writeHead(201); // 201 Created
        res.end();
      } else {
        res.writeHead(503); // 503 Service Unavailable
        res.end();
      }

    } else {
      res.writeHead(403); // 403 Forbiden
      res.end();
    }
  });
}

Meteor.methods({
  'transactions.insert'() {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return Transactions.insert({
      isApproved: false,
      userId: this.userId,
      createdAt: moment().valueOf(),
      updatedAt: moment().valueOf()
    });
  },
  'transactions.remove'(_id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({ _id });

    Transactions.remove({ _id });
  },
  'transactions.update'(_id, updates) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      isApproved: {
        type: Boolean,
        optional: true
      }
    }).validate({
      _id,
      ...updates
    });

    const result = Transactions.update(_id, {
      $set: {
        updatedAt: moment().valueOf(),
        ...updates
      }
    });

    if (result) {
      const tran = Transactions.findOne(_id);
      console.log(tran);
      try {
        // https://docs.meteor.com/api/http.html
        // https://themeteorchef.com/tutorials/using-the-http-package
        // https://www.tutorialspoint.com/meteor/meteor_http.htm
        HTTP.call( 'POST', tran.client_rest_api_endpoint, {
            data: {
              ...tran,
              is_approved: true
            }
          }, (error, response) => {
            if (error) {
              Transactions.update(_id, {
                $set: {
                  updatedAt: moment().valueOf(),
                  isApproved: false
                }
              });
            }
          });
        return true;
      } catch (e) {
        return false;
      }
    }
  }

});
