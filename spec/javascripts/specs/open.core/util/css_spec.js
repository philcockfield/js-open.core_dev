goog.require('core.css');
goog.require('core.global');


describe('core: util/css_spec', function() {

  it('is provided', function() {
    expect(core.css).toBeDefined();
  });


  describe('link', function() {
    var url = '/public/stylesheets/test.css';
    var linkSelector;

    beforeEach(function() {
      linkSelector = core.subs('head link[href="%s"]', url);
      $(linkSelector).remove();
    });

    it('adds a stylesheet to the head', function() {
      core.css.addLink(url);
      expect($(linkSelector).length).toEqual(1);
    });

    it('only adds a style sheet once', function() {
      core.css.addLink(url);
      core.css.addLink(url);
      core.css.addLink(url);
      expect($(linkSelector).length).toEqual(1);
    });

    it('removes a stylesheet', function() {
      core.css.addLink(url);
      core.css.removeLink(url);
      expect($(linkSelector).length).toEqual(0);
    });

    describe('linkExists', function() {
      it('stylesheet exists', function() {
        core.css.addLink(url);
        expect(core.css.linkExists(url)).toEqual(true);
      });

      it('stylesheet does not exist', function() {
        expect(core.css.linkExists('abcd.css')).toEqual(false);
      });
    });
  });

});
