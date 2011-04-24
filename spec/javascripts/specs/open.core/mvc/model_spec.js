goog.require('core.mvc.Model');


describe('mvc / model_spec', function() {
  var model, MyModel;

  beforeEach(function() {
    MyModel = core.mvc.Model.extend({
      defaults: {
        foo: 'bar'
      }
    });
    model = new MyModel();
  });


  describe('API', function() {
    it('has been provided', function() {
      expect(core.mvc.Model).toBeDefined();
    });
  });

  describe('toggle property function', function() {
    var propertyFunc, value;

    propertyFunc = function(newValue) {
      if (newValue !== undefined) value = newValue;
      return value;
    };

    beforeEach(function() {
      value = false;
    });

    it('toggles value to true', function() {
      expect(model.toggle(propertyFunc)).toEqual(true);
      expect(value).toEqual(true);
    });

    it('toggles value to false', function() {
      value = true;
      expect(model.toggle(propertyFunc)).toEqual(false);
      expect(value).toEqual(false);
    });

    it('toggles true/false', function() {
      model.toggle(propertyFunc);
      model.toggle(propertyFunc);
      expect(value).toEqual(false);
    });
  });


  describe('propertyFunc ("Property Function" pattern)', function() {
    it('stores value in backing Backbone property', function() {
      expect(model.get('foo')).toEqual('bar');
      model.propertyFunc(model, 'foo', 123);
      expect(model.get('foo')).toEqual(123);
    });

    it('changes reads value from Backbone backing property', function() {
      expect(model.propertyFunc(model, 'foo')).toEqual('bar');
      model.set({ foo: true});
      expect(model.propertyFunc(model, 'foo')).toEqual(true);
    });

    it('returns new value when writing', function() {
      expect(model.propertyFunc(model, 'foo', 123)).toEqual(123);
    });


    describe('events', function() {
      var fired = 0;

      beforeEach(function() {
        fired = 0;
        model.bind('change:foo', function() { fired += 1 });
      });

      it('fires event when property changes', function() {
        model.propertyFunc(model, 'foo', 1);
        model.propertyFunc(model, 'foo', 1);
        model.propertyFunc(model, 'foo', 2);
        expect(fired).toEqual(2);
      });

      it('does not fire event when silent option is passed', function() {
        model.propertyFunc(model, 'foo', 1, { silent: true });
        expect(fired).toEqual(0);
      });
    });
  });


  describe('createAutoProperties', function() {
    var defaults;

    beforeEach(function() {
      defaults = {
        prop1: 'bar',
        prop2: 123
      };
    });

    it('does not have properties (before creation method is called)', function() {
      expect(model.prop1).not.toBeDefined();
      expect(model.prop2).not.toBeDefined();
    });

    it('assigns properties via the [createAutoProperties] method', function() {
      model.createAutoProperties(model, defaults);
      expect(core.isInstanceOfType(model.prop1, Function)).toBeTruthy();
      expect(core.isInstanceOfType(model.prop2, Function)).toBeTruthy();
    });

    it('names the auto created properties', function() {
      model.createAutoProperties(model, defaults);

      expect(model.prop1.propName).toEqual('prop1');
    });

    it('reads default auto assigned property', function() {
      model.createAutoProperties(model, defaults);
      expect(model.prop1()).toEqual('bar');
      expect(model.prop2()).toEqual(123);
    });

    it('writes auto assigned property', function() {
      model.createAutoProperties(model, defaults);
      model.prop1('bax');
      model.prop2(987);
      expect(model.prop1()).toEqual('bax');
      expect(model.prop2()).toEqual(987);
    });

    it('is has not changed upon creation', function() {
      model.createAutoProperties(model, defaults);
      expect(model.hasChanged()).toEqual(false);
    });

    it('does not overwrite value assigned during creation of instance', function() {
      var Example, model;

      Example = core.mvc.Model.extend({
        initialize: function() {
          this.createAutoProperties(this,
          {
            foo: 'bar',
            baz: 123

          })
        }
      });
      model = new Example({ baz: 456 })
      expect(model.foo()).toEqual('bar');
      expect(model.baz()).toEqual(456);
    });

    describe('events', function() {
      var fireCount = 0;

      beforeEach(function() {
        model.bind('change:prop1', function() { fireCount += 1 });
        fireCount = 0;
      });

      it('does not fire change event during creation', function() {
        model.createAutoProperties(model, defaults);
        expect(fireCount).toEqual(0);
      });

      it('fires change event from auto created property', function() {
        model.createAutoProperties(model, defaults);
        model.prop1('my value');
        expect(fireCount).toEqual(1);
      });

      it('does not fire change event when silent option is passed', function() {
        model.createAutoProperties(model, defaults);
        model.prop1('my value', { silent: true });
        expect(fireCount).toEqual(0);
      });
    });

  });
});
