import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import { HTTP } from 'meteor/http';
import { Picker } from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';

import { ClientUrls } from './client_urls';

export const Transactions = new Mongo.Collection('transactions');
// const app = express();

if (Meteor.isServer) {
  Meteor.publish('transactions', function (perPage) {

    const role = Meteor.users.findOne(this.userId).role;
    const email = Meteor.users.findOne(this.userId).emails[0].address;

    if (role === 1) {
      return Transactions.find({}, { limit: perPage });
    } else if (role === 2) {
      // return Transactions.find({}, { limit: perPage });
      return Transactions.find({ approver: email }, { limit: perPage });
    } else if (role === 3) {
      // return Transactions.find({}, { limit: perPage });
      return Transactions.find({ owner: email }, { limit: perPage });
    }
  });

  // Ref. http://www.meteorpedia.com/read/REST_API
  // Ref. https://forums.meteor.com/t/is-there-a-way-to-receive-requests-get-or-post-on-meteor-server/43127
  // Ref. https://themeteorchef.com/tutorials/server-side-routing-with-picker
  // Ref. https://forums.meteor.com/t/post-data-with-meteorhacks-picker/4657
  Picker.middleware(bodyParser.json());
  Picker.middleware(bodyParser.urlencoded( {extended: true} ) );
  Picker.route('/api/transactions', function(params, req, res, next) {
    if (req.method === 'POST') {

      const headers = req.headers;

      // console.log(headers.authorization);
      // if (headers.authorization !== 'Token token=tb3vQwhAnJc2PNkusWvkgB4pA8wnVLpy7CXpEsz7jL' ) {
      //   res.writeHead(403); // 403 Forbiden
      //   res.end();
      //   return;
      // }

      const remoteAddress = req.connection.remoteAddress;

      const _id = Transactions.insert({
        ...req.body,
        remoteAddress
      });

      if (_id) {
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

  Picker.route('/api/v1/bank-accounts', function(params, req, res, next) {
    if (req.method === 'GET') {
      const bank_accounts = HTTP.get(Meteor.absoluteUrl('/files/bank-accounts.json')).data;
      res.setHeader('Content-Type', 'application/json');
      res.statusCode = 200;
      // res.end(JSON.stringify(bank_accounts, {indent: true}));
      res.end(JSON.stringify(bank_accounts, null, 2));
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
      delete tran._id;

      try {
        // Ref. https://docs.meteor.com/api/http.html
        // Ref. https://themeteorchef.com/tutorials/using-the-http-package
        // Ref. https://www.tutorialspoint.com/meteor/meteor_http.htm
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
