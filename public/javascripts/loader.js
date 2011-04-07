/**
 * Loader used to bootstrap the page (along with Google Closure)
 * when working in DEBUG mode.
 *
 * [loader.js] assumes that [goog/base.js] has been declared
 * in the page BEFORE this file.
 */


var LOADER = LOADER || {};


/**
 * Maps {tokens} in [deps.js] files to actual paths.
 * --------------------------------------------------------
 *
 * The scripts assumes the existence of a [LOADER.paths] object
 * describing how to map {token} values included within [deps.js]
 *
 * Doing this allows you to easily distribute where resources are
 * pulled from across multiple domains.
 *
 * Include the [LOADER.paths] in the page before the [loader.js]
 * script declaration.
 *
 */
LOADER.scriptMapper = (function() {
  var formatPath, overrideScriptWriter;

  formatPath = function(path) {
    var paths, mapValue;
    var tokenStart, tokenEnd, token;

    // Setup initial conditions.
    paths = LOADER.paths;

    if (!paths) {
      throw '[LOADER.paths] containing the URLs required to ' +
              'bootstrap the page cannot be found.';
    }

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
      if (!mapValue) {
        throw 'The path token ' + token + ' is not mapped to a value. ' +
                'Include it within the [LOADER.paths] ' +
                'mapping object on the page.';
      }

      path = mapValue + path;
    }
    return path;
  };


  /**
   * Overrides the SCRIPT tag writer within Goog [base.js]
   * allowing paths to be intercepted and formatted,
   * replacing {token}s with mapped values.
   */
  overrideScriptWriter = function() {

    // Store a reference to the original tag-writer.
    var googTagWriter = goog.writeScriptTag_;

    // Replace the goog function with this one.
    goog.writeScriptTag_ = function(src) {

      // Process any {tokens} within the path.
      src = formatPath(src);

      // Pass execution to the script writer.
      return googTagWriter(src);
    };
  }


  // Finish up.
  overrideScriptWriter();
}());
