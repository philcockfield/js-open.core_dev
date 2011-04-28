goog.require('core.controls.button.Model');

describe('core: controls/button/button.model_spec', function() {
  var button;

  beforeEach(function() {
    button = new core.controls.button.Model();
  });


  it('is provided', function() {
    expect(core.controls.button.Model).toBeDefined();
  });

  it('is an MVC Control model', function() {
    expect(core.isInstanceOfType(button, core.models.Control)).toBeTruthy();
  });


  describe('default values', function() {
    it('is not down by default', function() {
      expect(button.isDown()).toEqual(false);
    });

    it('is does not toggle by default', function() {
      expect(button.canToggle()).toEqual(false);
    });

    it('is enabled by default', function() {
      expect(button.isEnabled()).toEqual(true);
    });

    it('is visible by default', function() {
      expect(button.isVisible()).toEqual(true);
    });

    it('has no text label', function() {
      expect(button.label()).toEqual('');
    });
  });


  describe('click (method and event)', function() {
    var fireCount, args;

    beforeEach(function() {
      button.bind('click', function(e) {
        args = e;
        fireCount += 1;
      });
      args = null;
      fireCount = 0;
    });

    it('fires event when click method is invoked', function() {
      button.click();
      expect(fireCount).toEqual(1);
    });

    it('does not fire event when click method is invoked silently', function() {
      button.click({ silent: true });
      expect(fireCount).toEqual(0);
    });

    it('does not fire event when the model is disabled', function() {
      button.isEnabled(false);
      button.click();
      expect(fireCount).toEqual(0);
    });

    it('returns the model as the event args', function() {
      button.click();
      expect(args).toEqual(button);

    });

    describe('onClick wire up', function() {
      it('wires up event handler', function() {
        var onClickCount = 0;
        button.onClick(function() { onClickCount += 1; });
        button.click();
        expect(onClickCount).toEqual(1);
      });

      it('wire up multiple event handlers', function() {
        var fire1 = 0, fire2 = 0;

        button.onClick(function() { fire1 += 1; });
        button.onClick(function() { fire2 += 1; });

        button.click();
        expect(fire1).toEqual(1);
        expect(fire2).toEqual(1);
      });
    });
  });
});
