goog.require('open.core.reflection');
goog.require('lib.backbone');


describe('open.core.reflection', function() {
  describe('isTypeOf', function() {
    var isTypeOf;
    var Parent, parent;
    var Child, child;

    beforeEach(function() {
      isTypeOf = open.core.isTypeOf;

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
        expect(isTypeOf(child, Parent)).toBeTruthy();
      });

      it('when same child type supplied', function() {
        expect(isTypeOf(child, Child)).toBeTruthy();
      });
    });

    describe('is not match', function() {
      it('when instance value is undefined', function() {
        expect(isTypeOf(null, Parent)).toBeFalsy();
      });

      it('when compareTo value is undefined', function() {
        expect(isTypeOf(child, null)).toBeFalsy();
      });

      it('when both values are undefined', function() {
        expect(isTypeOf(null, null)).toBeFalsy();
      });

      it('when values are not derived from the same prototype', function() {
        expect(isTypeOf(child, 1234)).toBeFalsy();
      });

      it('when child of parent is supplied', function() {
        expect(isTypeOf(Parent, child)).toBeFalsy();
      });
    });
  });

});
