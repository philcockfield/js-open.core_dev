goog.require('core.controls.button.View');


describe('core: controls/button/button.view_spec', function() {
  var button, view, model;

  beforeEach(function() {
    button = core.controls.button;
    model = new button.Model({ text:'button' });
    view = new button.View({ model: model });
  });

  it('is provided', function() {
    expect(core.controls.button.View).toBeDefined();
  });

  it('is an MVC Model', function() {
    expect(core.isInstanceOfType(view, core.mvc.View)).toBeTruthy();
  });


  describe('model', function() {
    it('creates default model if none is specified at creation', function() {
      view = new button.View();
      expect(core.isInstanceOfType(view.model, button.Model)).toBeTruthy();
      expect(view.model).not.toEqual(model);

    });

    it('uses model specified at creation', function() {
      expect(view.model).toEqual(model);
    });
  });
});
