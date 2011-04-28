goog.require('core.global');
goog.require('goog.string');


describe('core: global_spec', function() {

  it('is provided', function() {
    expect(core.global).toBeDefined();
  });

  it('has version', function() {
    expect(core.version).toBeDefined();
  });

  describe('copy of utils to core', function() {
    it('has goog.string.subs on core', function() {
      expect(core.subs('one %s three', 'two')).toEqual('one two three');
    });
  });


  describe('paths', function() {
    it('defines the base paths', function() {
      expect(core.Paths).toBeDefined();
    });

    it('sets root property to default from paths.js file', function() {
      expect(core.Paths().root).toEqual(LOADER.paths.folder.core);
    });

    it('sets root property to custom value', function() {
      var paths = core.Paths('foo');
      expect(paths.root).toEqual('foo');
      expect(paths.images).toEqual('foo/assets/images');
      expect(paths.css).toEqual('foo/assets/css');
    });

    it('has asset properties', function() {
      var paths = core.Paths();
      expect(paths.root).toBeDefined();
      expect(paths.assets).toBeDefined();
      expect(paths.images).toBeDefined();
      expect(paths.css).toBeDefined();
    });

    it('store sub-folder value', function() {
      var paths = core.createPaths('foo');
      expect(paths.subFolder).toEqual('foo');
    });

    it('creates paths with sub-folder for images', function() {
      var paths = core.createPaths('foo');
      expect(goog.string.endsWith(paths.images, '/assets/images/foo')).toBeTruthy();
    });

    it('creates paths with sub-folder for css', function() {
      var paths = core.createPaths('foo');
      expect(goog.string.endsWith(paths.css, '/assets/css/foo')).toBeTruthy();
    });

    it('creates custom root path with sub-folder', function() {
      var paths = core.createPaths('sub', 'root');
      expect(paths.images).toEqual('root/assets/images/sub');
    });
  });


});
