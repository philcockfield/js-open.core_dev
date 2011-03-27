goog.require('lib.jquery');
goog.require('lib.underscore');
goog.require('lib.backbone');

describe('Third Party Libraries', function() {
  describe('lib.jquery', function() {
    it('has been provided', function() {
      expect($('body').length).toEqual(1);
    });

    it("has version on namespace", function() {
      expect(lib.jquery.version).toEqual("1.4.2");
    });
  });

  describe('lib.backbone', function() {
    it('has been provided', function() {
      var M = Backbone.Model.extend();
      expect(M).toBeDefined();
    });

    it("has version on namespace", function() {
      expect(lib.backbone.version).toEqual("0.3.3");
    });
  });

  describe('lib.underscore', function() {
    it('has been provided', function() {
      var result = _.map([1, 2, 3], function(num){ return num * 3; });
      expect(result).toEqual([3, 6, 9]);
    });

    it("has version on namespace", function() {
      expect(lib.underscore.version).toEqual("1.1.5");
    });
  });
});
