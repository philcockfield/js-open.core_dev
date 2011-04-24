goog.require('core.events');


describe('core: util/events_spec', function() {
  describe('API', function() {
    it('is exposed from [core]', function() {
      expect(core.events).toBeDefined();
    });
  });

  describe('event firing', function() {
    var events;

    beforeEach(function() {
      events = core.events;
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



