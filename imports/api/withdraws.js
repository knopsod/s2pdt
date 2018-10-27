import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import { HTTP } from 'meteor/http';
import { Picker } from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';

export const Withdraws = new Mongo.Collection('withdraws');
// const app = express();

if (Meteor.isServer) {
  Meteor.publish('wihtdraws', function (perPage) {
    return Withdraws.find({});
  });

  // Ref. http://www.meteorpedia.com/read/REST_API
  // Ref. https://forums.meteor.com/t/is-there-a-way-to-receive-requests-get-or-post-on-meteor-server/43127
  // Ref. https://themeteorchef.com/tutorials/server-side-routing-with-picker
  // Ref. https://forums.meteor.com/t/post-data-with-meteorhacks-picker/4657
  Picker.middleware(bodyParser.json());
  Picker.middleware(bodyParser.urlencoded( {extended: true} ) );
  Picker.route('/api/v1/withdraws', function(params, req, res, next) {
    console.log('req.body -> ', req.body);
    if (req.method === 'POST') {

      const headers = req.headers;

      const _id = Withdraws.insert({
        ...req.body,
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
}

Meteor.methods({
  'withdraws.insert'() {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return Withdraws.insert({
      isApproved: false,
      userId: this.userId,
      createdAt: moment().valueOf(),
      updatedAt: moment().valueOf()
    });
  },
  'withdraws.remove'(_id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({ _id });

    Withdraws.remove({ _id });
  },
  'withdraws.update'(_id, updates) {
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

    const result = Withdraws.update(_id, {
      $set: {
        updatedAt: moment().valueOf(),
        ...updates
      }
    });

    if (result) {
      const withdraw = Withdraws.findOne(_id);
      delete withdraw._id;

      try {
        // Ref. https://docs.meteor.com/api/http.html
        // Ref. https://themeteorchef.com/tutorials/using-the-http-package
        // Ref. https://www.tutorialspoint.com/meteor/meteor_http.htm
        HTTP.call( 'POST', withdraw.client_rest_api_endpoint, {
            data: {
              ...withdraw,
              is_approved: true
            }
          }, (error, response) => {
            if (error) {
              Withdraws.update(_id, {
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
