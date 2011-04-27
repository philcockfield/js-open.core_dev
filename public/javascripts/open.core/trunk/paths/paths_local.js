var LOADER = LOADER || {};
LOADER.useLocal = true;

LOADER.coreLocal = 'http://localhost:3333';
LOADER.coreLocalIP = 'http://10.0.1.3:3333';
LOADER.coreRemote = 'http://opencore.heroku.com';


LOADER.coreDomain = function() {
  var useLocal = LOADER.useLocal;
  var localServer;

  var onServer = function(server) {
    return location.href.indexOf(server) === 0;
  };

  // Determine if running on host-name or IP address.
  if (onServer(LOADER.coreLocal)) localServer = LOADER.coreLocal;
  if (onServer(LOADER.coreLocalIP)) localServer = LOADER.coreLocalIP;

  // Never use local addresses when not running locally.
  if (useLocal && !localServer) useLocal = false;

  // Finish up.
  return useLocal ? localServer : LOADER.coreRemote;
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



