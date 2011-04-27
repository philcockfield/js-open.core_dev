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

    // Ensure a model exists.
    if (!this.model) this.model = new core.controls.iPadShell.Model();

    _.bindAll(this, 'render');
    this.render();
  },


  /**
   * Renders the view to 'el' (element).
   */
  render: function() {

    // Insert HTML.
    var html = core.controls.iPadShell.tmpl.root({ view: this });
    $(this.el).html(html);

    // Build regions map.
    this.regions = {
      left: {
        header: this.$('.left .header .region').get(0),
        body: this.$('.left > .region').get(0),
        footer: this.$('.left .footer .region').get(0)
      },
      main: {
        header: this.$('.main .header .region').get(0),
        body: this.$('.main > .region').get(0),
        footer: this.$('.main .footer .region').get(0)
      }
    };

    // Finish up.
    return this;
  },


  /**
   * Gets the set of regions
   */
  regions: null // Set in 'render' method.

});
