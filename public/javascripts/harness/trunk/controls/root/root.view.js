goog.provide('harness.controls.root.View');

goog.require('core.controls.iPadShell.View');
goog.require('core.mvc.Model');
goog.require('core.mvc.View');
goog.require('harness.controls.root.Model');
goog.require('harness.controls.root.tmpl');
goog.require('harness.global');
goog.require('lib.backbone');


/**
 * View: The root control of the TestHarness.
 */
harness.controls.root.View = core.mvc.View.extend({
  /**
   * Constructor.
   */
  initialize: function() {
    _.bindAll(this, 'render');

    // Ensure a model exists.
    if (!this.model) this.model = new harness.controls.root.Model();

    // Store paths.
    this.paths = harness.createPaths('root');

    // Create the root shell.
    this.shell = new core.controls.iPadShell.View();
    this.model.shell = this.shell.model;
    this.el = this.shell.el;
    this.$(this.el).addClass('harness');
    this.regions = this.shell.regions;

    // Finish up.
    this.render();
  },


  /**
   * Gets the View of the root iPad shell.
   */
  shell: null, // Set in constructor.


  /**
   * Gets the regions of the shell.
   */
  regions: null, // Set in constructor.

  /**
   * Gets the paths for the control.
   */
  paths: null, // Set in constructor.


  /**
   * Renders the view to 'el' (element).
   */
  render: function() {
    var tmpl = harness.controls.root.tmpl;

    // Render regions.
    this.shell.model.regions.main.footer
            .loadHtml(tmpl.mainFooter({ view: this }));

    // Finish up.
    return this;
  }
});
