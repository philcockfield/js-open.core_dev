goog.provide('core.controls.iPadShell.Model');

goog.require('core.models.Control');
goog.require('core.models.Region');

/**
 * Model: A typical iPad shell structure.
 */
core.controls.iPadShell.Model = core.models.Control.extend({

  /**
   * Constructor.
   */
  initialize: function() {
    //_.bindAll(this, '');
    core.models.Control.prototype.initialize.call(this);


    // Create the set of region models.
    var Region = core.models.Region;
    this.regions = {
      left: {
        header: new Region(),
        body: new Region(),
        footer: new Region()
      },
      main: {
        header: new Region(),
        body: new Region(),
        footer: new Region()
      }
    }
  },

  /**
   * Gets the set of regions for the shell.
   */
  regions: null // Set in constructor.
});
