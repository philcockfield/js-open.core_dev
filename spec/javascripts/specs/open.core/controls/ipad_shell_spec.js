goog.require('core.controls.iPadShell.Model');
goog.require('core.controls.iPadShell.View');
goog.require('core.controls.iPadShell.tmpl');



describe('core: controls/iPad_shell_spec', function() {
  var shell;
  var model, view;

  beforeEach(function() {
    shell = core.controls.iPadShell;
    model = new shell.Model();
    view = new shell.View({ model: model });
  });


  describe('Model', function() {
    it('is provided', function() {
      expect(core.controls.iPadShell.Model).toBeDefined();
    });

    it('is an MVC Model', function() {
      expect(core.isInstanceOfType(model, shell.Model)).toBeTruthy();
    });

    it('calls base class on creation', function() {
      expect(model.isVisible).toBeDefined();
    });
  });

  describe('View', function() {
    it('is provided', function() {
      expect(core.controls.iPadShell.View).toBeDefined();
    });

    it('is an MVC View', function() {
      expect(core.isInstanceOfType(view, shell.View)).toBeTruthy();
    });

    it('has CSS classes', function() {
      expect(view.el.className).toEqual('core shell ipad');
    });

    describe('render', function() {
      it('renders upon creation', function() {
        expect($(view.el).children().length).not.toEqual(0);
      });
    });

  });

  describe('Template (tmpl)', function() {
    it('is provided', function() {
      expect(core.controls.iPadShell.tmpl).toBeDefined();
    });
  });

});
