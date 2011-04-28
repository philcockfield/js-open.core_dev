goog.provide('core.css');

goog.require('goog.global');
goog.require('lib.jquery');


core.css = (function() {
  var getLink = function(url) {
    return $(core.subs('head link[href="%s"]', url));
  };

  /**
   * Adds a css LINK to the HEAD.
   * @param {string} url of the stylesheet.
   */
  var addLink = function(url) {

    // Don't continue if the link exists.
    if (linkExists(url)) return;

    // Insert the LINK.
    var html = '<link rel="stylesheet" href="%s" type="text/css" />';
    $('head').append(core.subs(html, url));
  };


  /**
   * Determines whether a css LINK exists in the HEAD.
   * @param {string} url of the style sheet.
   */
  var linkExists = function(url) {
    return getLink(url).length > 0;
  };


  /**
   * Removes the specified css LINK from the HEAD.
   * @param {string} url of the style sheet.
   */
  var removeLink = function(url) {
    getLink(url).remove();
  };


  /**
   * The API.
   */
  return {
    addLink: addLink,
    linkExists: linkExists,
    removeLink: removeLink
  };
}());

