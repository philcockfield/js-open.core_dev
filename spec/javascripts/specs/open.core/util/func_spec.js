goog.require('core.util.func');


describe('util / func_spec', function() {
  var funcUtil;

  beforeEach(function() {
    funcUtil = core.util.func;
  });


  it('is provided', function() {
    expect(core.util.func).toBeDefined();
  });


  describe('propertyFunc (Property Function pattern)', function() {
    var propertyFunc, value, fnRead, fnWrite;

    beforeEach(function() {
      propertyFunc = funcUtil.propertyFunc;
      value = 0;
      fnRead = function() { return value; };
      fnWrite = function(newValue) { value = newValue; };
    });

    it('reads the current value', function() {
      expect(propertyFunc(fnRead, fnWrite)).toEqual(0);
    });

    it('writes a new value', function() {
      propertyFunc(fnRead, fnWrite, 123);
      expect(value).toEqual(123);
    });

    it('returns the new value when writing', function() {
      expect(propertyFunc(fnRead, fnWrite, 123)).toEqual(123);
    });
  });


  describe('toggle property function', function() {
    var propertyFunc, fnToggle, value;

    propertyFunc = function(newValue) {
      if (newValue !== undefined) value = newValue;
      return value;
    };

    beforeEach(function() {
      fnToggle = funcUtil.toggle;
      value = false;
    });

    it('toggles value to true', function() {
      fnToggle(propertyFunc);
      expect(value).toEqual(true);
    });

    it('toggles value to false', function() {
      value = true;
      fnToggle(propertyFunc);
      expect(value).toEqual(false);
    });

    it('toggles true/false', function() {
      fnToggle(propertyFunc);
      fnToggle(propertyFunc);
      expect(value).toEqual(false);
    });
  });

});
