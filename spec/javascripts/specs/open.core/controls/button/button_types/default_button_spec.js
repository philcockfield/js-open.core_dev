goog.require('core.controls.button.defaultButton.View');
goog.require('core.controls.button.Model');


describe('core: controls/button/button_types/default_button_spec', function() {
  var model, view, el;

  beforeEach(function() {
    model = new core.controls.button.Model({ label:'foo' });
    view = new core.controls.button.defaultButton.View({ model: model });
    el = $(view.el);
  });


  describe('View (core.controls.button.defaultButton.View)', function() {
    it('is provided', function() {
      expect(core.controls.button.defaultButton.View).toBeDefined();
    });

    it('is a button View', function() {
      expect(core.isInstanceOfType(view, core.controls.button.View)).toBeTruthy();
    });

    describe('paths', function() {
      it('assigns AssetPaths from class property to instance at creation', function() {
        expect(view.paths).toBeDefined();
        expect(view.paths).toEqual(core.controls.button.defaultButton.View.paths);
      });

      it('has a sub-folder of button.default', function() {
        expect(view.paths.subFolder).toEqual('/button.default');
      });
    });
  });


  describe('rendering', function() {
    it('should be a BUTTON', function() {
      expect(view.el.tagName).toEqual('BUTTON');
    });

    it('should have the button CSS class', function() {
      expect(goog.string.startsWith(view.el.className, 'core default button')).toBeTruthy();
    });

    it('renders upon construction', function() {
      expect(el.text().length).not.toEqual(0);
    });

    it('is a jQuery button', function() {
      expect(el.attr('role')).toEqual('button');
    });
  });


  describe('enabled state', function() {
    it('disables the jQuery button when the model is disabled', function() {
      model.isEnabled(false);
      expect(el.button('option', 'disabled')).toEqual(true);
    });

    it('enables the jQuery button when the model is enabled', function() {
      model.isEnabled(false);
      model.isEnabled(true);
      expect(el.button('option', 'disabled')).toEqual(false);
    });
  });
});
