goog.require('core.testing.util');


describe('core: testing/testing_util_spec', function() {
  var loremIpsum;

  beforeEach(function() {
    loremIpsum = core.testing.loremIpsum;
  });

  it('is provided', function() {
    expect(core.testing.util).toBeDefined();
  });


  describe('lorem ipsum', function() {
    it('returns empty string if less totalWords is 0', function() {
      expect(loremIpsum(0)).toEqual('');
    });

    it('returns empty string if less totalWords is not specified', function() {
      expect(loremIpsum(0)).toEqual('');
    });

    it('returns empty string if less totalWords is less than zero', function() {
      expect(loremIpsum(0)).toEqual('');
    });

    it('return word with full stop', function() {
      expect(loremIpsum(6)).toEqual('Lorem.');
    });

    it('return words without full stop', function() {
      expect(loremIpsum(55, false)).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit');
    });

    it('returns words exceeding total number in initial string of Lorem Ipsum', function() {
      var result = loremIpsum(5000);
      expect(result.length).toEqual(5000);
    });
  });

});
