import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';
import { HTTP } from 'meteor/http';
import { Picker } from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';

import { ClientUrls } from './client_urls';

export const Withdraws = new Mongo.Collection('withdraws');
// const app = express();

if (Meteor.isServer) {
  Meteor.publish('withdraws', function (perPage) {
    
    const role = Meteor.users.findOne(this.userId).role ? Meteor.users.findOne(this.userId).role : 3;
    const email = Meteor.users.findOne(this.userId).emails[0].address;
    
    if (role === 1) {
      return Withdraws.find({}, 
        { sort: 
          { transferred_datetime: -1 }, 
          limit: perPage 
        }
      );
    } else if (role === 2) {
      return Withdraws.find({ approver: email }, 
        { sort: { transferred_datetime: -1 }, 
        limit: perPage }
      );
    } else if (role === 3) {
      return Withdraws.find({ owner: email }, 
        { sort: { transferred_datetime: -1 }, 
        limit: perPage }
      );
    }
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

      const remoteAddress = req.connection.remoteAddress;
      const { client_url } = req.body;

      // https://stackoverflow.com/questions/8206269/how-to-remove-http-from-a-url-in-javascript
      const short_client_url = client_url.replace(/(^\w+:|^)\/\//, '');
      console.log('short_client_url -> ', short_client_url);

      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
      // https://steelkiwi.com/blog/mongo-collections-meteorjs/
      var re = new RegExp('.*' + short_client_url + '.*');
      const { approver, owner } = ClientUrls.findOne({url: re}) ? ClientUrls.findOne({url: re}) : { approver: '', owner: '' };

      const _id = Withdraws.insert({
        ...req.body,
        remoteAddress,
        owner,
        short_client_url,
        is_approved: !(
          req.body.is_approved === false || 
          req.body.is_approved === 'false' || 
          req.body.is_approved === '' ||
          req.body.is_approved === '0' ||
          req.body.is_approved === 0
        ),
        createdAt: (req.body.createdAt) ? req.body.createdAt : moment().valueOf(),
        creatorId: (req.body.creatorId) ? req.body.creatorId : null
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
