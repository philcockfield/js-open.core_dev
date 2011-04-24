var LOADER = LOADER || {};
LOADER.useLocal = true;

LOADER.coreLocal = 'http://localhost:3333';
LOADER.coreRemote = 'http://opencore.heroku.com';


LOADER.coreDomain = function() {
  var useLocal = LOADER.useLocal;

  // Never use local addresses when not running locally.
  if (location.href.indexOf('http://localhost') < 0) {
    useLocal = false;
  }

  return useLocal ? LOADER.coreLocal : LOADER.coreRemote;
};


/**
 * URL domain mappings.
 */
LOADER.paths = {
  folder: {
    core: LOADER.coreDomain() + '/javascripts/open.core/trunk',
    harness: LOADER.coreDomain() + '/javascripts/harness/trunk'
  },

  '{open.core}': LOADER.coreDomain(),
  '{harness}': LOADER.coreDomain(),
  '{closure-lib}': LOADER.coreDomain(),
  '{closure-tmpl}': LOADER.coreDomain()
};



