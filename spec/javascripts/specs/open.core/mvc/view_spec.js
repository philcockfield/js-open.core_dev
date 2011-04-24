goog.require('core.mvc.View');
goog.require('core.models.Control');

describe('core: mvc/view_spec', function() {
  var view, MyView, model, el;

  beforeEach(function() {
    MyView = core.mvc.View.extend({

    });

    model = new core.models.Control();
    view = new MyView({ model: model });
    el = $(view.el);
  });

  it('can be constructed', function() {
    expect(new core.mvc.View()).toBeDefined();
  });

  describe('API', function() {
    it('has been provided', function() {
      expect(core.mvc.View).toBeDefined();
    });
  });

  describe('visibility', function() {
    it('is not hidden by default', function() {
      expect(el.css('display')).toEqual('');
    });

    it('hides the element when isVisible is set to false', function() {
      model.isVisible(false);
      expect(el.css('display')).toEqual('none');
    });

    it('shows the element when isVisible is set to true', function() {
      model.isVisible(false);
      model.isVisible(true);
      expect(el.css('display')).toEqual('');
    });
  });
});
