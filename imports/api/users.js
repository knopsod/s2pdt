import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import { Accounts } from 'meteor/accounts-base';


export const validateNewUser = (user) => {
  const email = user.emails[0].address;

  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({ email });

  return true;
};

if (Meteor.isServer) {
  Accounts.validateNewUser(validateNewUser);

  Meteor.publish('allUsers', function () {
    return Meteor.users.find({}, { fields: { emails: 1, role: 1 } });
  });
}

Meteor.methods({
  'users.role_update'(_id, updates) {
    if (!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      _id: {
        type: String,
        min: 1
      },
      role: {
        type: Number,
        optional: true
      }
    }).validate({
      _id,
      ...updates
    });

    Meteor.users.update(_id, {
      $set: {
        ...updates
      }
    })
  }
});
