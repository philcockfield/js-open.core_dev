goog.provide('core.models.Region');

/**
 * Represents a region of the screen, typically
 * within a shell structure.
 */
core.models.Region = core.models.Control.extend({

  /**
   * Constructor.
   */
  initialize: function() {
    _.bindAll(this, 'loadUrl', 'loadHtml');

    // Call constructor in base class.
    core.models.Control.prototype.initialize.call(this);
  },


  /**
   * Loads the HTML from the given URL, and fires
   * the 'load:html' event when complete.
   *
   * @param {string} url of the HTML (with optional fragment selector).
   * @param {object} complete - include 'success' and 'error'
   *                callbacks as desired.
   */
  loadUrl: function(url, complete) {
    var self = this;

    $.ajax({
      url: url,
      success: function(data) {
        self.loadHtml(data);
        if (complete && complete.success) complete.success(data);
      },
      complete: function(xhr, text) {
        if (text !== 'success') {
          if (complete && complete.error) complete.error(xhr, text);
        }
      }
    });
  },


  /**
   * Tells listeners to load the specified HTML
   * via the 'load:html' event.
   * @param {string} html to load.
   */
  loadHtml: function(html) {
    this.trigger('load:html', html);
  }
});
