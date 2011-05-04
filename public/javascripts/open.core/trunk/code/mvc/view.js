goog.provide('core.mvc.View');

goog.require('core.global');
goog.require('lib.backbone');
goog.require('lib.jquery');


/**
 * The base for views (visual controls).
 */
core.mvc.View = Backbone.View.extend({
  /**
   * Constructor.
   */
  initialize: function() {
    var self = this, model = this.model;
    _.bindAll(this, 'html');

    // Keep visibility in sync.
    if (model) {
      model.bind('change:isVisible', function() {
        if (model.isVisible()) {
          $(self.el).show();
        } else {
          $(self.el).hide();
        }
      });
    }
  },


  /**
   * Gets or sets the HTML of the element (.el).
   * @param {string} html value to write into the element.
   */
  html: function(html) {
    return $(this.el).html(html);
  }
});
