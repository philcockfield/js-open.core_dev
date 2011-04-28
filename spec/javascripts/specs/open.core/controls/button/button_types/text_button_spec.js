goog.require('core.controls.button.textButton.View');
goog.require('goog.string');


describe('core: controls/button/button_types/text_button_spec', function() {
  var view, model;

  beforeEach(function() {
    model = new core.controls.button.Model({ label: 'name' });
    view = new core.controls.button.textButton.View({ model: model });
  });

  describe('View (core.controls.button.textButton.View)', function() {
    it('is provided', function() {
      expect(core.controls.button.textButton.View).toBeDefined();
    });

    it('is an MVC Model', function() {
      expect(core.isInstanceOfType(view, core.controls.button.View)).toBeTruthy();
    });


    describe('rendering', function() {
      it('should be a ANCHOR', function() {
        expect(view.el.tagName).toEqual('A');
      });

      it('should have the button CSS class', function() {
        expect(view.el.className).toEqual('core text button');
      });

      it('renders upon construction', function() {
        expect($(view.el).text().length).not.toEqual(0);
      });
    });


    describe('click', function() {
      var fireCount = 0;

      beforeEach(function() {
        model.bind('click', function() { fireCount += 1; });
        fireCount = 0;
      });

      it('causes model to fire Click event when anchor is clicked', function() {
        var anchor = $(view.el);
        anchor.trigger('click');
        expect(fireCount).toEqual(1);
      });
    });


    describe('label', function() {
      it('renders with label property value', function() {
        expect($(view.el).text()).toEqual(model.label());
      });

      it('updates text within Anchor when model changes', function() {
        model.label('foo');
        expect($(view.el).text()).toEqual('foo');
      });
    });
  });
});
