goog.provide('core.controls.button.View');

goog.require('core.controls.button.Model');
goog.require('core.mvc.View');

/**
 * The base class for button Controls.
 */
core.controls.button.View = core.mvc.View.extend({

  /**
   * Constructor.
   */
  initialize: function() {
    // Call base class constructor.
    core.mvc.View.prototype.initialize.call(this);

    // Create a default button model if none was specified.
    if (!this.model) this.model = new core.controls.button.Model();
  }

});
