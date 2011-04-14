goog.provide('open.core.testing.util');

goog.require('lib.underscore');
goog.require('goog.string');

/**
 * Returns a string of 'lorem ipsum'.
 * @param {int} totalChars - the number of characters to include.
 * @param {Boolean} fullStop - optional flag indicating if the string
 *                  should be prefixed with a full stop.
 *
 */
open.core.testing.loremIpsum = (function() {
  var raw = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Maecenas vel eleifend nisl. Suspendisse tristique dignissim ' +
          'leo ut auctor. Cras convallis purus sed massa placerat sed ' +
          'cursus sapien consectetur. In hac habitasse platea dictumst. ' +
          'Nullam ac neque eu libero dictum iaculis in convallis erat. ' +
          'Sed et tortor quis justo congue condimentum sed egestas orci. ' +
          'Aenean a ipsum mattis mi bibendum varius viverra at erat. ' +
          'Nunc arcu neque, sodales eget placerat vel, vehicula ut orci. ' +
          'Mauris euismod consectetur mauris quis imperdiet. ' +
          'Cras pharetra egestas felis sit amet egestas. Proin tristique ' +
          'iaculis leo, nec hendrerit lacus tristique in. Nulla congue ' +
          'ultricies lorem a viverra. Fusce quis lectus ac enim ultricies ' +
          'molestie. Proin elit arcu, hendrerit facilisis feugiat tempor, ' +
          'accumsan quis nulla. Maecenas gravida ultricies enim quis ' +
          'vulputate. Quisque id velit vitae enim lacinia feugiat ut ut ' +
          'sapien. Fusce semper venenatis sapien id vulputate. Aenean ' +
          'tempor hendrerit pulvinar. Praesent sed tortor vitae magna ' +
          'consequat tempor. Nullam a volutpat eros. Suspendisse sit ' +
          'amet quam ac purus convallis semper vel id erat. Praesent ' +
          'interdum, mauris a hendrerit mattis, sem velit congue velit, ' +
          'vel faucibus nunc nibh vel lectus. Suspendisse mollis, magna non ' +
          'aliquet tempor, massa velit feugiat sem, ut sagittis risus eros a ' +
          'est. Curabitur mattis vulputate nisl, a cursus diam ultricies et. ' +
          'Maecenas nunc dui, pulvinar et semper vitae, accumsan quis ' +
          'libero. Etiam lobortis leo eget purus porttitor vitae adipiscing ' +
          'dolor scelerisque.';

  return function(totalChars, fullStop) {
    var source, replaceLast;

    // Setup initial conditions.
    if (!totalChars || totalChars <= 0) return '';
    if (fullStop === undefined) fullStop = true;

    // Ensure the text is long enough.
    source = raw;
    while (source.length < totalChars) {
      source += raw;
    }

    replaceLast = function(text, withChar) {
      return text.substr(0, lorem.length - 1) + withChar;
    };

    // Get the return words.
    var lorem = source.substr(0, totalChars);

    // Trim space.
    if (goog.string.endsWith(lorem, ' ')) lorem = replaceLast(lorem, 'e');

    // Trim full stop.
    if (goog.string.endsWith(lorem, '.')) lorem = replaceLast(lorem, 's');

    // Append full stop (if required).
    if (fullStop) lorem = replaceLast(lorem, '.');

    // Finish up.
    return lorem;
  };
}());
