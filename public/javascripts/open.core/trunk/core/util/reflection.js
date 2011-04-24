goog.provide('open.core.reflection');


/**
 * Walks the prototype chain looking for a match
 * prototype match.
 * @param {object} childInstance to match (__proto__).
 * @param {object} parentObject - base object to compare to (prototype).
 * @return {boolean} true if the child instance is
 *          based on the parent's prototype.
 */
open.core.isInstanceOfType = function(childInstance, parentObject) {
  // Setup initial conditions.
  if (!childInstance || !parentObject) return false;

  // Walk up the prototype chain looking for a match.
  var proto = childInstance.__proto__;
  while (proto) {
    if (proto === parentObject.prototype) return true;
    proto = proto.__proto__;
  }

  // Finish up.
  return false;
};
