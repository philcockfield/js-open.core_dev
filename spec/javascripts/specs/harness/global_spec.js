goog.require('harness.global');
goog.require('goog.string');


describe('harness: global_spec', function() {

  it('has version', function() {
    expect(harness.version).toEqual('1.0.0');
  });


  describe('paths', function() {
    it('has createPaths method', function() {
      expect(harness.createPaths).toBeDefined();
    });

    it('creates paths routed to the Harness folder', function() {
      var paths = harness.createPaths();
      paths.root = LOADER.paths.folder.harness;
    });
  });
});
