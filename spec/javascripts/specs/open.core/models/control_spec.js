goog.require('core.models.Control');


describe('core: models/control_spec', function() {
  var model;

  beforeEach(function() {
    model = new core.models.Control();
  });

  it('is provided', function() {
    expect(core.models.Control).toBeDefined();
  });

  it('is an MVC Model', function() {
    expect(core.isInstanceOfType(model, core.mvc.Model)).toBeTruthy();
  });

  describe('API', function() {
    describe('isVisible', function() {
      it('is visible by default', function() {
        expect(model.isVisible()).toEqual(true);
      });

      it('changes visibility', function() {
        model.isVisible(false);
        expect(model.isVisible()).toEqual(false);
      });

      it('stores visibility in backing "IsVisible" Backbone property', function() {
        expect(model.get('isVisible')).toEqual(true);
        model.isVisible(false);
        expect(model.get('isVisible')).toEqual(false);
      });

      it('changes native "IsVisible" property when Backbone backing property changes', function() {
        expect(model.isVisible()).toEqual(true);
        model.set({ isVisible: false });
        expect(model.isVisible()).toEqual(false);
      });

      it('returns new value when writing', function() {
        expect(model.isVisible(false)).toEqual(false);
      });

      it('fires event when visibility changes', function() {
        var fired = 0;
        model.bind('change:isVisible', function() { fired += 1 });

        model.isVisible(false);
        model.isVisible(false);
        expect(fired).toEqual(1);
      });

      it('toggles visibility', function() {
        expect(model.toggle(model.isVisible)).toEqual(false);
        expect(model.isVisible()).toEqual(false);

        expect(model.toggle(model.isVisible)).toEqual(true);
        expect(model.isVisible()).toEqual(true);
      });
    });

    describe('isEnabled', function() {
      it('is enabled by default', function() {
        expect(model.isEnabled()).toEqual(true);
      });

      it('changes enabled state', function() {
        model.isEnabled(false);
        expect(model.isEnabled()).toEqual(false);
      });

      it('stores enabled state in backing "IsEnabled" Backbone property', function() {
        expect(model.get('isEnabled')).toEqual(true);
        model.isEnabled(false);
        expect(model.get('isEnabled')).toEqual(false);
      });

      it('changes native "IsEnabled" property when Backbone backing property changes', function() {
        expect(model.isEnabled()).toEqual(true);
        model.set({ isEnabled: false });
        expect(model.isEnabled()).toEqual(false);
      });

      it('returns new value when writing', function() {
        expect(model.isEnabled(false)).toEqual(false);
      });

      it('fires event when enabled state changes', function() {
        var fired = 0;
        model.bind('change:isEnabled', function() { fired += 1 });

        model.isEnabled(false);
        model.isEnabled(false);
        expect(fired).toEqual(1);
      });

      it('toggles enabled state', function() {
        expect(model.toggle(model.isEnabled)).toEqual(false);
        expect(model.isEnabled()).toEqual(false);

        expect(model.toggle(model.isEnabled)).toEqual(true);
        expect(model.isEnabled()).toEqual(true);
      });
    });

  });

});
