goog.provide('core.controls.button.Model');

goog.require('core.models.Control');


/**
 * The logical model for all buttons.
 */
core.controls.button.Model = core.models.Control.extend({
  /**
   * Constructor.
   */
  initialize: function() {
    _.bindAll(this, 'click', 'onClick');

    // Call the constructor of the base class.
    core.models.Control.prototype.initialize.call(this);

    // Create properties.
    this.createAutoProperties(this,
    {
      /**
       * Gets or sets whether the button is currently pressed.
       * @param {Boolean} isDown - the pressed to set (pass nothing to read).
       */
      isDown: false,

      /**
       * Gets or sets whether the button can remain toggled
       * into a down state.
       * @param {Boolean} canToggle - the canToggle value to
       *        set (pass nothing to read).
       */
      canToggle: false,

      /**
       * Gets or sets the text label for the button.
       * @param {string} text - the text label.
       */
      label: ''
    });
  },


  /**
   * Informs the button it has been clicked, causing
   * the 'click' event to fire.
   * @param {object} options - pass {silent:true} to supress event.
   */
  click: function(options) {
    var fireEvent = !(options && (options.silent === true));
    if (! this.isEnabled()) fireEvent = false;

    // Alert listeners.
    if (fireEvent) this.trigger('click', this);
  },

  /**
   * Wire up the given event handler to execute when
   * the button is clicked.
   * @param {function} callback - the function to invoke
   *                   when the button is clicked.
   */
  onClick: function(callback) {
    if (callback) this.bind('click', callback);
  }
});
