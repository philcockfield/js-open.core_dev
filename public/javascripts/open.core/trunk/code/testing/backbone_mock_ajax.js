goog.provide('core.testing.backbone');

goog.require('lib.backbone');
goog.require('lib.jasmine.mock.ajax');


/**
 * Extends Backbone.js with helpers for mocking AJAX responses
 * from Models via the 'fetch()' method.
 *
 * See:
 *  - Backbone.sync
 *  - jasmine-ajax
 */
Backbone.mock = function() {
  var mockApi, mockUrls = [], getItem;
  var initSpy, tryInitSpy;

  // PRIVATE Members.
  /**
   * Looks up the mock-data item matching the given url.
   * @param {string} url to look up.
   */
  getItem = function(url) {
    return _(mockUrls).detect(function(item) { return item.url === url });
  };


  /**
   * Calls 'initSpy' within a try/catch block.
   */
  tryInitSpy = function() {
    try { initSpy(); }
    catch (err) {
      // Ignore:
      // This will fail if called multiple times.
      // We just want to make sure it has been called at least once.
    }
  };

  /**
   * Initializes spying on jQuery.
   * This jQuery is invoked within the [Backbone.sync] method.
   */
  initSpy = function() {
    spyOn(jQuery, 'ajax').andCallFake(function(params) {
      // Ensure there is a URL.
      if (mockUrls.length === 0) return;
      if (!params || !params.url || !params.success) return;

      // Walk through each URL looking for a match.
      // If found invoke the 'onSuccess' callback with the mock data.
      _.each(mockUrls, function(item) {
        if (params.url === item.url) {
          params.success(item.data);
        }
      });
    });
  };


  // PUBLIC Members.
  mockApi = {
    /**
     * Gets the set of URLs that have been registered to respond to.
     */
    urls: function() { return _.pluck(mockUrls, 'url'); },

    /**
     * Adds a URL to match, and the response data
     * to provide when matched.
     * @param {string} url - the URL to match.
     */
    respondTo: function(url) {
      var mockUrl;

      // Setup initial conditions.
      this.remove(url);

      // PUBLIC Members.
      mockUrl = new function() {
        return {
          /**
           * The URL to match.
           */
          url: url,

          /**
           * The mock data value to return when the URL is matched.
           */
          data: null,

          /**
           * The object to return if the URL is matched.
           * @param {Object} data to return as the AJAX response.
           */
          withValue: function(data) {
            this.data = data;
          }
        };
      }();

      // Store and return the mock data.
      mockUrls.push(mockUrl);
      tryInitSpy();
      return mockUrl;
    },

    /**
     * Determines whether the given URL has been registered
     * for the mock to respond to.
     * @param {string} url to match.
     */
    respondsTo: function(url) {
      return !_.isUndefined(getItem(url));
    },

    /**
     * Removes the specified URL.
     * @param {string} url to remove.
     */
    remove: function(url) {
      mockUrls = _.reject(mockUrls, function(item) {return item.url === url; });
    },

    /**
     * Removes all registered URLs.
     */
    clear: function() {
      mockUrls = [];
    }
  };

  // Finish up.
  return mockApi;
}();
