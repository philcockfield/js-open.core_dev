var LOADER = LOADER || {};
LOADER.useLocal = true;

LOADER.coreLocal = 'http://localhost:3333';
LOADER.coreRemote = 'http://opencore.heroku.com/javascripts';


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
  coreFolder: LOADER.coreDomain() + '/javascripts/open.core/trunk',

  '{open.core}': LOADER.coreDomain(),
  '{closure-lib}': LOADER.coreDomain(),
  '{closure-tmpl}': LOADER.coreDomain()
};



