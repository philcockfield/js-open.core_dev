goog.require('core.controls.json.Model');
goog.require('core.controls.json.View');
goog.require('core.models.Control');
goog.require('core.mvc.View');



describe('core: controls/json_spec', function() {
  var nsJson;
  var model, view;

  beforeEach(function() {
    nsJson = core.controls.json;
    model = new nsJson.Model();
    view = new nsJson.View();
  });

  describe('Model', function() {
    it('is provided', function() {
      expect(core.controls.json.Model).toBeDefined();
    });

    it('is a Control model', function() {
      expect(core.isInstanceOfType(model, core.models.Control)).toBeTruthy();
    });
  });

  describe('View', function() {
    it('is provided', function() {
      expect(core.controls.json.View).toBeDefined();
    });

    it('is an MVC View', function() {
      expect(core.isInstanceOfType(view, core.mvc.View)).toBeTruthy();
    });

  });
});
