goog.provide('core.util.func');


/**
 * Provides common logic for implementing the
 * "Property Function" pattern.
 *
 * A "property function" is a function that returns a
 * value when no parameter is specified, and updates
 * the value of the property when a value is passed.
 * For example:
 *
 *    model.myProperty()     // Read.
 *    model.myProperty(123)  // Write.
 *
 * @param {function} fnRead - block that reads the value of the property.
 * @param {function} fnWrite - block that writes the value to the property.
 * @param {object} value - the new value to change (undefined for read).
 */
core.util.func.propertyFunc = function(fnRead, fnWrite, value) {
  if (value !== undefined) fnWrite(value);
  return fnRead();
};


/**
 * Toggles the value of a Boolean read/write property function.
 * See: propertyFunc for more details.
 *
 * @param {function} fnProperty - the Boolean property function to toggle.
 */
core.util.func.toggle = function(fnProperty) {
  return fnProperty(! fnProperty());
};
