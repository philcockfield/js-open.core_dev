goog.require('core.reflection');
goog.require('lib.backbone');


describe('core: util/reflection_spec', function() {
  describe('isInstanceOfType', function() {
    var isInstanceOfType;
    var Parent, parent;
    var Child, child;

    beforeEach(function() {
      isInstanceOfType = core.isInstanceOfType;

      Parent = Backbone.Model.extend({ foo: 'bar' });
      Child = Parent.extend();

      parent = new Parent();
      child = new Child();
    });

    describe('inheritance mocks (base line)', function() {
      it('child has parent property', function() {
        expect(child.foo).toEqual('bar');
      });
    });


    describe('is match', function() {
      it('when derived instance supplied', function() {
        expect(isInstanceOfType(child, Parent)).toBeTruthy();
      });

      it('when same child type supplied', function() {
        expect(isInstanceOfType(child, Child)).toBeTruthy();
      });
    });

    describe('is not match', function() {
      it('when instance value is undefined', function() {
        expect(isInstanceOfType(null, Parent)).toBeFalsy();
      });

      it('when compareTo value is undefined', function() {
        expect(isInstanceOfType(child, null)).toBeFalsy();
      });

      it('when both values are undefined', function() {
        expect(isInstanceOfType(null, null)).toBeFalsy();
      });

      it('when values are not derived from the same prototype', function() {
        expect(isInstanceOfType(child, 1234)).toBeFalsy();
      });

      it('when child of parent is supplied', function() {
        expect(isInstanceOfType(Parent, child)).toBeFalsy();
      });
    });
  });

});
