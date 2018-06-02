import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const ClientUrls = new Mongo.Collection('client_urls');

if (Meteor.isServer) {
  Meteor.publish('client_urls', function () {
    return ClientUrls.find({})
  });
}

Meteor.methods({
  'client_urls.insert'(client_url) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    const { url } = client_url;

    // new SimpleSchema({
    //   url: {
    //     type: String,
    //     regEx: SimpleSchema.RegEx.Url
    //   }
    // }).validate({ url });

    return ClientUrls.insert({
      url,
      userId: this.userId,
      updatedAt: moment().valueOf()
    });
  },
  'client_urls.remove'(_id) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      }
    }).validate({ _id });

    ClientUrls.remove({ _id });
  },
  'client_urls.update'(_id, updates) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      url: {
        type: String,
        optional: true,
        regEx: SimpleSchema.RegEx.Url
      },
      endpoint: {
        type: String,
        optional: true,
        regEx: SimpleSchema.RegEx.Url
      },
      owner: {
        type: String,
        optional: true
      },
      approver: {
        type: String,
        optional: true
      }
    }).validate({
      _id,
      ...updates
    });

    ClientUrls.update(_id, {
      $set: {
        updatedAt: moment().valueOf(),
        ...updates
      }
    })
  }
});
