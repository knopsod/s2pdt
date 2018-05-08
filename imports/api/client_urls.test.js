import { Meteor } from 'meteor/meteor';
import expect from 'expect';

import { ClientUrls } from './client_urls';

if (Meteor.isServer) {
  describe('client_ulrs', function () {
    const clientUrlOne = {
      _id: 'testClientUrlId1',
      url: 'www.google.com',
      userId: 'testUserId1'
    };

    beforeEach(function () {
      ClientUrls.remove({});
      ClientUrls.insert(clientUrlOne);
    });

    it('should insert new client url', function () {
      const userId = 'testid';
      const _id = Meteor.server.method_handlers['client_urls.insert'].apply({ userId });

      expect(ClientUrls.findOne({ _id, userId })).toExist();
    });

    it('should not insert client url if not authenticated', function () {
      expect(() => {
        Meteor.server.method_handlers['client_urls.insert']();
      }).toThrow();
    });

    it('should remove client url', function () {
      Meteor.server.method_handlers['client_urls.remove'].apply(
        { userId: clientUrlOne.userId }, [clientUrlOne._id]);

      expect(ClientUrls.findOne({ _id: clientUrlOne._id})).toNotExist();
    });

    it('should not remove client url if unauthenticated', function () {
      expect(() => {
        Meteor.server.method_handlers['client_urls.remove'].apply({}, [clientUrlOne._id]);
      }).toThrow();
    });

    it('should not remove client url if invalid _id', function () {
      expect(() => {
        Meteor.server.method_handlers['client_urls.remove'].apply({}, ['']);
      }).toThrow();
    });

    it('should update client url', function () {
      const url = 'http://www.twitter.com';

      Meteor.server.method_handlers['client_urls.update'].apply({
        userId: clientUrlOne.userId
      }, [
        clientUrlOne._id,
        { url }
      ]);

      const client_url = ClientUrls.findOne(clientUrlOne._id);

      expect(client_url.updatedAt).toBeGreaterThan(0);
      expect(client_url).toInclude({
        url
      });
    });

    it('should throw error if invalid client url', function () {
      expect(() => {
        Meteor.server.method_handlers['client_urls.update'].apply({
          userId: clientUrlOne._id
        }, [
          clientUrlOne._id,
          { url: 'invalidUrl//https:' }
        ]);
      }).toThrow();
    });

  });
}
