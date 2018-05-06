import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { Transactions } from './transactions';

if (Meteor.isServer) {
  describe('transactions', function () {

    beforeEach(function () {
      Transactions.remove({});
      Transactions.insert({
        _id: 'testTransactionId1',
        userId: 'testUserId1'
      });
    });

    it('should insert new transaction', function () {
      const userId = 'testid';
      const _id = Meteor.server.method_handlers['transactions.insert'].apply({ userId });

      expect(Transactions.findOne({ _id, userId })).toExist();
    });

    it('should not insert transaction if not authenticated', function () {
      expect(() => {
        Meteor.server.method_handlers['transactions.insert']();
      }).toThrow();
    });

    it('should remove transaction', function () {
      Meteor.server.method_handlers['transactions.remove'].apply({ userId: 'testUserId1' }, ['testTransactionId1']);

      expect(Transactions.findOne({ _id: 'testTransactionId1'})).toNotExist();
    });

    it('should not remove transaction if unauthenticated', function () {
      expect(() => {
        Meteor.server.method_handlers['transactions.remove'].apply({}, ['testTransactionId1']);
      }).toThrow();
    });

    it('should not remove transaction if invalid _id', function () {
      expect(() => {
        Meteor.server.method_handlers['transactions.remove'].apply({}, ['']);
      }).toThrow();
    });

    it('should update transaction', function () {
      const isApproved = true;

      Meteor.server.method_handlers['transactions.update'].apply({
        userId: 'testUserId1'
      }, [
        'testTransactionId1',
        { isApproved }
      ]);

      const transaction = Transactions.findOne('testTransactionId1');

      expect(transaction.isApproved).toBe(true);
    });

    it('should not update transaction if unauthenticated', function () {
      expect(() => {
        Meteor.server.method_handlers['transactions.update'].apply({}, [
          'testTransactionId1',
          { isApproved: true }
        ]);
      }).toThrow();
    });

  });
}
