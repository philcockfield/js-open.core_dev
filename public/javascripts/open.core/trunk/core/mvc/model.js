goog.provide('core.mvc.Model');

goog.require('core.global');
goog.require('core.util.func');
goog.require('lib.backbone');


/**
 * The base for MVC models.
 */
core.mvc.Model = Backbone.Model.extend({

  /**
   * Toggles the value of a Boolean read/write property function.
   * See: propertyFunc for more details.
   *
   * @param {function} fnProperty - the Boolean property function to toggle.
   */
  toggle: core.util.func.toggle,


  /**
   * Provides common logic for exposing backbone properties
   * using the "Property Function" pattern.
   *
   * A "property function" is a function that returns a
   * value when no parameter is specified, and updates
   * the value of the property when a value is passed.
   * For example:
   *
   *    model.myProperty()     // Read.
   *    model.myProperty(123)  // Write.
   *
   * @param {core.mvc.Model} self - the model being changed.
   * @param {string} propertyName - the name of the property.
   * @param {object} value - the new value to change (undefined for read).
   * @param {object=} options - options for setting the value.
   *            (See: http://documentcloud.github.com/backbone/#Model-set).
   */
  propertyFunc: function(self, propertyName, value, options) {
    return core.util.func.propertyFunc(

            function() { return self.get(propertyName) },

            function(value) {
              var args = {};
              args[propertyName] = value;
              self.set(args, options);
            },

            value);
  },


  /**
   * Turns the set of properties declared within the [defaults]
   * object literal into "Property Functions" that are directly
   * accessible from the model.
   *
   * Note: This is useful so that magic strings can be avoided
   * when addressing with Model properties.
   *
   * The "Property Function" pattern is used.  For more information
   * on this see:
   *   - this.propertyFunc, and
   *   - core.util.fun.propertyFunc
   *
   * @param {object} defaults -
   *     the declaration of default values
   *     for properties of the model. For all properties that
   *     you want exposed from the model, ensure there is a default
   *     value declared within this object.
   */
  createAutoProperties: function(self, defaults) {

    // Setup initial conditions.
    if (!defaults) return;

    var closure, writeArgs, propName;

    closure = function(propName) {
      var fn = function(value, options) {
        return self.propertyFunc(self, propName, value, options);
      };
      fn.propName = propName;
      return fn;
    };

    // Enumerate the collection of properties.
    for (propName in defaults) {

      // Assign the property.
      self[propName] = new closure(propName);

      // Set the default value (silently).
      // NB: Do not overwrite existing value which may have been
      // set via a 'defaults' or passed in at creation.
      if (self.get(propName) === undefined) {
        writeArgs = {};
        writeArgs[propName] = defaults[propName];
        self.set(writeArgs, { silent: true });
      }
    }
  }
});

