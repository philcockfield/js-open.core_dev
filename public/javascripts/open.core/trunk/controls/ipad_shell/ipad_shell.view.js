goog.provide('core.controls.iPadShell.View');

goog.require('core.controls.iPadShell.Model');
goog.require('core.controls.iPadShell.tmpl');
goog.require('core.mvc.View');

/**
 * View: A typical iPad shell structure.
 */
core.controls.iPadShell.View = core.mvc.View.extend({
  className: 'core shell ipad',


  /**
   * Constructor.
   */
  initialize: function() {
    _.bindAll(this, 'render');
    this.render();
  },


  /**
   * Renders the view to 'el' (element).
   */
  render: function() {
    var html = core.controls.iPadShell.tmpl.root({ view: this });
    $(this.el).html(html);
    return this;
  }
});
