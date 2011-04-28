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
    var self = this;

    // Ensure a model exists.
    if (!this.model) this.model = new core.controls.iPadShell.Model();

    _.bindAll(this, 'render');
    this.render();

    // Wire up events.
    (function() {
      var regions = self.model.regions;
      var elements = self.regionElements;
      var bindRegion = function(region, el) {
        region.bind('load:html', function(html) {
          $(el).html(html);
        });
      };
      // Left.
      bindRegion(regions.left.header, elements.left.header);
      bindRegion(regions.left.body, elements.left.body);
      bindRegion(regions.left.footer, elements.left.footer);

      // Main.
      bindRegion(regions.main.header, elements.main.header);
      bindRegion(regions.main.body, elements.main.body);
      bindRegion(regions.main.footer, elements.main.footer);
    }());
  },


  /**
   * Renders the view to 'el' (element).
   */
  render: function() {

    // Insert HTML.
    var html = core.controls.iPadShell.tmpl.root({ view: this });
    $(this.el).html(html);

    // Build regions map.
    this.regionElements = {
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
   * Gets the set of elements for each region in the shell.
   */
  regionElements: null // Set in 'render' method.

});
