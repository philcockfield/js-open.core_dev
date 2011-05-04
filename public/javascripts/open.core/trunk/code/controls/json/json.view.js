goog.provide('core.controls.json.View');

goog.require('core.controls.json.Model');
goog.require('core.controls.json.tmpl');
goog.require('core.mvc.View');


/**
 * View: A color coded JSON renderer.
 */
core.controls.json.View = core.mvc.View.extend({
  className: 'oc_json',

  /**
   * Constructor.
   */
  initialize: function() {
    _.bindAll(this, 'render');
    core.mvc.View.prototype.initialize.call(this);
    this.model = this.model || new core.controls.json.Model();
  },

  /**
   * Renders the view to 'el' (element).
   */
  render: function() {
    var tmpl = core.controls.json.tmpl;
    var html = tmpl.root();
    this.html(html);
    return this;
  }


});
