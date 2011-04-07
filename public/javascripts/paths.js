var LOADER = LOADER || {};



/**
 * Declares the paths used by the LOADER to bootstrap the page.
 */
LOADER.paths = {
  /**
   * Path to where the closure-tools and closure-templates are stored.
   */
//  closure: '/javascripts/closure',

  /**
   * Collection of paths to dependency files.
   */
  preload: [
    '/javascripts/open.core/deps.js',
    '/javascripts/test/deps.js',
    '/javascripts/application.js'
  ],

  /**
   * Dependency domain mappings.
   */
//  '{open.core}': 'http://localhost:3000/javascripts'
  '{open.core}': 'http://open-core.heroku.com/javascripts'


};

