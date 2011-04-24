goog.require('core.models.Spacing');
goog.require('core.mvc.Model');


describe('core: models/spacing_spec', function() {
  var spacing;

  beforeEach(function() {
    spacing = new core.models.Spacing();
  });

  it('is provided', function() {
    expect(core.models.Spacing).toBeDefined();
  });

  it('is an MVC model', function() {
    expect(core.isInstanceOfType(spacing, core.mvc.Model)).toBeTruthy();
  });


  describe('API (Edges)', function() {
    describe('reading default values', function() {
      it('has left property', function() {
        expect(spacing.left()).toEqual(0);
      });

      it('has top property', function() {
        expect(spacing.top()).toEqual(0);
      });

      it('has right property', function() {
        expect(spacing.right()).toEqual(0);
      });

      it('has bottom property', function() {
        expect(spacing.bottom()).toEqual(0);
      });
    });

    describe('writing values', function() {
      it('has left property', function() {
        expect(spacing.left(10)).toEqual(10);
        expect(spacing.left()).toEqual(10);
      });

      it('has top property', function() {
        expect(spacing.top(10)).toEqual(10);
        expect(spacing.top()).toEqual(10);
      });

      it('has right property', function() {
        expect(spacing.right(10)).toEqual(10);
        expect(spacing.right()).toEqual(10);
      });

      it('has bottom property', function() {
        expect(spacing.bottom(10)).toEqual(10);
        expect(spacing.bottom()).toEqual(10);
      });
    });
  });


  describe('create (factory method)', function() {
    it('creates with all the 0 edge values (no param)', function() {
      var item = spacing.create();
      expect(item.left()).toEqual(0);
      expect(item.top()).toEqual(0);
      expect(item.right()).toEqual(0);
      expect(item.bottom()).toEqual(0);
    });

    it('creates with all the same edge value', function() {
      var item = spacing.create(10);
      expect(item.left()).toEqual(10);
      expect(item.top()).toEqual(10);
      expect(item.right()).toEqual(10);
      expect(item.bottom()).toEqual(10);
    });

    it('creates with different edge values', function() {
      var item = spacing.create(1, 2, 3, 4);
      expect(item.left()).toEqual(1);
      expect(item.top()).toEqual(2);
      expect(item.right()).toEqual(3);
      expect(item.bottom()).toEqual(4);
    });

    it('creates with different edge values when more than 4 params specified', function() {
      var item = spacing.create(1, 2, 3, 4, 5, 6, 7, 8);
      expect(item.left()).toEqual(1);
      expect(item.top()).toEqual(2);
      expect(item.right()).toEqual(3);
      expect(item.bottom()).toEqual(4);
    });

    it('creates with same left/right and top/bottom values', function() {
      var item = spacing.create(1, 2);
      expect(item.left()).toEqual(1);
      expect(item.right()).toEqual(1);

      expect(item.top()).toEqual(2);
      expect(item.bottom()).toEqual(2);
    });

    it('creates with same left/right and top/bottom values using first 2 params if 3 params specified', function() {
      var item = spacing.create(1, 2, 3);
      expect(item.left()).toEqual(1);
      expect(item.right()).toEqual(1);

      expect(item.top()).toEqual(2);
      expect(item.bottom()).toEqual(2);
    });
  });

});
