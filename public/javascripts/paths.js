var LOADER = LOADER || {};
LOADER.local = true;

LOADER.localJs = '';
LOADER.remoteJs = 'http://open-core.heroku.com/javascripts';

LOADER.defaultPath = function() {
  return LOADER.local ? LOADER.localJs : LOADER.remoteJs;
};

/**
 * URL domain mappings.
 */
LOADER.paths = {
  '{open.core}': LOADER.defaultPath(),
  '{closure-lib}': LOADER.defaultPath(),
  '{closure-tmpl}': LOADER.defaultPath()
};

