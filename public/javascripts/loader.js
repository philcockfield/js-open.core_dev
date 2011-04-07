/**
 * Loader used to bootstrap the page when working in DEBUG mode.
 * --------------------------------------------------------
 *
 * The loader assumes the existence of a 'LOADER.paths' object
 * describing where various required elements can be found.
 * Include this in the page before the [loader.js] script declaration.
 */
var LOADER = LOADER || {};

LOADER.util = {
  defaultPaths: {},

  formatPath: function(path) {
    var paths, mapValue;
    var tokenStart, tokenEnd, token;

    // Setup initial conditions.
    paths = LOADER.paths;

    if (!paths) throw '[LOADER.paths] containing the URLs required to ' +
            'bootstrap the page cannot be found.';

    // Determine if there is a token within the path.
    tokenStart = path.indexOf('{');
    if (tokenStart < 0) return path;

    // Extract token.
    path = path.substr(tokenStart, path.length - tokenStart);
    tokenEnd = path.indexOf('}');
    token = path.substr(0, tokenEnd + 1);
    path = path.substr(tokenEnd + 1, path.length - (tokenEnd + 1));

    // Swap out the token.
    if (token) {
      mapValue = paths[token];
      if (!mapValue) throw 'The path token ' + token + ' is not mapped to a value.  ' +
              'Include it within the [LOADER.paths] mapping object on the page.';
      path = mapValue + path;
    }
    return path;
  },


  /**
   * Overrides the SCRIPT tag writer within Goog [base.js]
   * allowing paths to be intercepted and formatted,
   * replacing {token}s with mapped values.
   * @param goog
   */
  overrideScriptWriter: function(goog) {

    // Store a reference to the original tag-writer.
    var googTagWriter = goog.writeScriptTag_;

    // Replace the goog function with this one.
    goog.writeScriptTag_ = function(src) {

      // Process any {tokens} within the path.
      src = LOADER.util.formatPath(src);

      // Pass execution to the script writer.
      return googTagWriter(src);
    };
  }
};


/**
 * Inject overrides to default Google behavior.
 */
LOADER.util.overrideScriptWriter(goog);
