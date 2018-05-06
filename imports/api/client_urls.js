import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';
import SimpleSchema from 'simpl-schema';

export const ClientUrls = new Mongo.Collection('client_urls');

Meteor.methods({
  'client_urls.insert'() {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    return ClientUrls.insert({
      url: '',
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
