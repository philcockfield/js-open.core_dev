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
  /**
   * Determines whether the given string starts with another string.
   * @param {string} value - the to examine the start of.
   * @param {string} match - the value to match.
   */
  startsWith: function(value, match) {
    return value.indexOf(match) === 0;
  },

  /**
   * Gets the start of a string if it is token in the form of {name}.
   * @param {string} value to examine.
   * @returns {string} the token if found, otherwise undefined.
   */
  getStartingToken: function(value) {
    if (startsWith(value, '{')) {
      return value.substr(0, value.indexOf('}') + 1);
    }
  },

  /**
   * The document HEAD element.
   */
  head: document.getElementsByTagName('head')[0],

  /**
   * Inserts a SCRIPT tag into the HEAD.
   * @param {string} url - the URL to the script to load.
   * @param {function} onload - callback to invoke when the script is loaded.
   */
  addScript: function(url, onload) {
    var util, script, formatUrl;
    util = LOADER.util;

    // Prepare the url.
    formatUrl = function(src) {
      return src + '?' + new Date().getTime();
    };

    // Create tag.
    script = document.createElement('script');
    script.src = formatUrl(url);
    script.type = 'text/javascript';

    // Setup load handler.
    if (onload) {
      if (script.onload !== undefined) { script.onload = onload; }
      if (script.onreadystatechange !== undefined) {
        if (script.readyState === 'complete') { onload(); }
      }
    }

    // Insert into DOM.
    util.head.appendChild(script);
    return true;
  },


  TEMP_WRITE: function(src) {

    console.log('>> SCRIPT: ', src);


    if (goog.inHtmlDocument_()) {
      var doc = goog.global.document;
      doc.write(
          '<script type="text/javascript" src="' + src + '"></' + 'script>');
      return true;
    } else {
      return false;
    }
  },

  /**
   * Adds a collection of SCRIPT tags and invoke a callback when all have loaded.
   * @param {Array} urls - array of src URLs to load.
   * @param {function} onAllLoaded - callback to invoke when all have loaded.
   */
  addScripts: function(urls, onAllLoaded) {

    var total = urls.length;
    var loaded = 0;
    for (var i = 0, total; i < total; i += 1) {
      this.addScript(urls[i], function() {
        loaded += 1;
        if (loaded === total && onAllLoaded) onAllLoaded();
      });
    }
  }
};


/**
 * Initializes the page.
 */
LOADER.init = function() {
  var util;
  var paths, closureTools, closureDeps;

  // Setup initial conditions.
  paths = LOADER.paths;
  util = LOADER.util;

  // Prepare paths.
  if (!paths) throw '[LOADER.paths] containing the URLs required to ' +
          'bootstrap the page cannot be found.';
  closureTools = paths.closure + '/closure-library/closure/goog';
  closureDeps = [
    closureTools + '/deps.js',
    paths.closure + '/closure-templates/deps.js'
  ];


  var addScripts = function() {
    // Insert an alternative SCRIPT tag adder into [base.js].
    // This allows us to catch and format the path before it is inserted.
//    goog.writeScriptTag_ = util.addScript;

    goog.writeScriptTag_ = LOADER.util.TEMP_WRITE;

    // Add Closure dependencies.
    util.addScripts(closureDeps, function() {
      // Add the initial set of pre-load scripts, prior to [base.js] taking over.
      if (paths.preload) {
        for (var i = 0, max = paths.preload.length; i < max; i += 1) {
          util.addScript(paths.preload[i]);
        }
      }
    });
  };

  // Insert scripts.
  util.addScript(closureTools + '/base.js', function() {
    addScripts();
  });

//  addScripts();
  
};


LOADER.init();



