goog.provide('harness.controls.root.Model');

goog.require('core.models.Control');


/**
 * Model: The root control of the TestHarness.
 */
harness.controls.root.Model = core.models.Control.extend({

  /**
   * Constructor.
   */
  initialize: function() {
    core.models.Control.prototype.initialize.call(this);
  },


  /**
   * Gets the model for the root shell structure.
   */
  shell: null, // Set by view at creation.


  /**
   * Renders the HTML at the given URL into the main region.
   * @param {string} url to load.
   * @param {function} callback to invoke upon completion.
   */
  renderMainHtml: null // Set by view at creation.

});
