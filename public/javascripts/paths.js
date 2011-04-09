var INIT = INIT || {};
INIT.local = true;

INIT.localJs = '/javascripts';
INIT.remoteJs = 'http://open-core.heroku.com/javascripts';

INIT.defaultPath = function() {
  return INIT.local ? INIT.localJs : INIT.remoteJs;
}

/**
 * URL domain mappings.
 */
INIT.paths = {
  '{open.core}': INIT.defaultPath(),
  '{closure-lib}': INIT.defaultPath(),
  '{closure-tmpl}': INIT.defaultPath()
};

