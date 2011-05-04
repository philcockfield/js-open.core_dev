goog.provide('core.models.Spacing');

goog.require('core.mvc.Model');


/**
 * Represents pixel edge spacing (eg as padding or margin).
 * See the [util/factory] for helpful constructors.
 */
core.models.Spacing = core.mvc.Model.extend({
  /**
   * Constructor.
   */
  initialize: function() {
    this.createAutoProperties(this, {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    });
  },

  /**
   * Creates a new Spacing object.
   *
   * Parameters:
   * - 1 param:  all edges are the same.
   * - 4 params: order - left, top, right, bottom.
   * - 2 params: order - (value1: left/right) (value2: top/bottom).
   *
   * @param {...number} edge values to construct with.
   * @return {core.models.Spacing} the new Spacing object.
   */
  create: function() {
    var args, totalArgs, Spacing = core.models.Spacing;

    // Prepare arguments.
    args = Array.prototype.slice.call(arguments);
    if (args.length === 0) args = [0];
    totalArgs = args.length;

    // Construct the Spacing object.
    if (totalArgs === 1) {
      return new Spacing({
        left: args[0],
        top: args[0],
        right: args[0],
        bottom: args[0]
      });

    } else if (totalArgs === 2 || totalArgs === 3) {
      return new Spacing({
        left: args[0],
        right: args[0],
        top: args[1],
        bottom: args[1]
      });

    } else {
      return new Spacing({
        left: args[0],
        top: args[1],
        right: args[2],
        bottom: args[3]
      });
    }
  }
});


