/**
 * Utilities for working on mobile platforms.
 */
goog.provide('core.util.mobile');


/**
 * Adds an event canceller to the 'touchmove'
 * event preventing the base document from being
 * scrolled (thereby locking it in place).
 */
core.util.mobile.lockPage = (function() {
  var eventAdded = false;

  return function() {
    if (eventAdded) return;
    document.addEventListener(
            'touchmove', function(e) { e.preventDefault(); }, false);
    eventAdded = true;
  };
}());


