goog.provide('core.models.Control');

goog.require('core.mvc.Model');


/**
 * The base class for model's that represent
 * visual controls.
 */
core.models.Control = core.mvc.Model.extend({
  /**
   * Constructor.
   */
  initialize: function() {
    this.createAutoProperties(this,
    {
      /**
       * Gets or sets the visibility of the control.
       * @param {Boolean} isVisible - the visibility to set
       *        (pass nothing to read).
       */
      isVisible: true,

      /**
       * Gets or sets the enabled state of the control.
       * @param {Boolean} isEnabled - the visibility to set
       *        (pass nothing to read).
       */
      isEnabled: true
    });
  }
});
