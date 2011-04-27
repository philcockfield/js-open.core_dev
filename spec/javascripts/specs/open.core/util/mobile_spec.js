goog.require('core.util.mobile');

describe('core: util/mobile_spec', function() {
  var util;

  beforeEach(function() {
    util = core.util.mobile;
  });

  it('is provided', function() {
    expect(core.util.mobile).toBeDefined();
  });

  describe('lockPage', function() {
    it('adds event to document (only once)', function() {
      spyOn(document, 'addEventListener').andCallThrough();

      util.lockPage();
      util.lockPage();

      expect(document.addEventListener).toHaveBeenCalled();
      expect(document.addEventListener.callCount).toEqual(1);
    });
  });

});
