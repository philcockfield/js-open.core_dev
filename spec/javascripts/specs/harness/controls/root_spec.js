goog.require('harness.controls.root.Model');
goog.require('harness.controls.root.View');
goog.require('core.models.Control');
goog.require('core.controls.iPadShell.View');
goog.require('goog.string');
goog.require('harness.global');


describe('harness: controls/root_spec', function() {
  var iPadShell;
  var root, view, model;

  beforeEach(function() {
    iPadShell = core.controls.iPadShell;
    root = harness.controls.root;
    view = new root.View();
    model = view.model;
  });


  describe('Model', function() {
    it('is provided', function() {
      expect(harness.controls.root.Model).toBeDefined();
    });

    it('is an MVC Control', function() {
      expect(core.isInstanceOfType(model, core.models.Control)).toBeTruthy();
    });

    it('has a shell property', function() {
      expect(core.isInstanceOfType(model.shell, iPadShell.Model)).toBeTruthy();
    });

    it('calls base constructor', function() {
      expect(model.isVisible).toBeDefined();
    });

    it('has a renderMainHtml method (set from the view)', function() {
      expect(model.renderMainHtml).toEqual(view.renderMainHtml);
    });
  });


  describe('View', function() {
    it('is provided', function() {
      expect(harness.controls.root.View).toBeDefined();
    });

    it('is an MVC View', function() {
      expect(core.isInstanceOfType(view, core.mvc.View)).toBeTruthy();
    });

    it('uses the iPad shell as the root element (.el)', function() {
      expect(view.el).toEqual(view.shell.el);
    });

    it('prepends the harness CSS class', function() {
      expect(view.el.className).toEqual('core shell ipad harness');
    });

    it('exposes the shells regions', function() {
      expect(view.regions).toEqual(view.shell.regions);
    });

    describe('paths', function() {
      it('has a paths instance', function() {
        expect(view.paths).toBeDefined();
      });

      it('appends the image location', function() {
        goog.string.endsWith(view.paths.images, 'images/root')
      });
    });


    it('creates a model on the View at creation', function() {
      expect(core.isInstanceOfType(new root.View().model, root.Model)).toBeTruthy();
    });

    describe('shell', function() {
      it('stores the iPad shell as a property', function() {
        expect(core.isInstanceOfType(view.shell, iPadShell.View)).toBeTruthy();
      });
    });

  });

});
