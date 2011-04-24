goog.provide('core.controls.iPadShell.Model');

goog.require('core.models.Control');

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
  }

});
