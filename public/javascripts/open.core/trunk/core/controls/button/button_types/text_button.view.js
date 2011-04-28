goog.provide('core.controls.button.textButton.View');

goog.require('core.controls.button.View');
goog.require('lib.jquery');


/**
 * A simple text-button.
 */
core.controls.button.textButton.View = core.controls.button.View.extend({
  tagName: 'a',
  className: 'core text button',

  /**
   * Constructor.
   */
  initialize: function() {
    // Call base class constructor.
    core.controls.button.View.prototype.initialize.call(this);

    // Setup initial conditions.
    var self = this;
    _.bindAll(this, 'render');
    this.render();

    // Wire up events.
    $(this.el).click(function(e) {
      e.preventDefault(); // Suppress default link behavior.
      self.model.click();
    });

    this.model.bind('change:label', function() {
      self.render();
    });
  },


  /**
   * Renders the view to 'el' (element).
   */
  render: function() {
    var el = $(this.el);
    el.html(this.model.label());
    el.attr('href', '#'); // NB: Makes it click-able and focus-able.
    return this;
  }

});
