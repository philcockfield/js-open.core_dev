goog.require('open.core.events');


describe('open.core.events', function() {
  describe('API', function() {
    it('is exposed from [open.core]', function() {
      expect(open.core.events).toBeDefined();
    });
  });

  describe('event firing', function() {
    var events;

    beforeEach(function() {
      events = open.core.events;
    });

    it('responds to a subscribed event when it is published', function() {
      var wasFired = false;
      events.subscribe('test:event', function() { wasFired = true; });

      events.publish('test:event');
      expect(wasFired).toBeTruthy();
    });

    it('does not respond after an event us unsubscribed', function() {
      var wasFired = false;
      events.subscribe('test:event', function() { wasFired = true; });
      events.unsubscribe('test:event');

      events.publish('test:event');
      expect(wasFired).toBeFalsy();
    });
  });
});



