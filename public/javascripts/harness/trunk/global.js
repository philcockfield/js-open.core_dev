goog.provide('harness.global');

goog.require('core.global');


/**
 * Gets the version of the TestHarness.
 */
harness.version = '1.0.0';


/**
 * Creates a new paths instance routing to the
 * harness folder.
 * @param {string} subFolder for where images/css are stored.
 */
harness.createPaths = function(subFolder) {
  return core.createPaths(subFolder, LOADER.paths.folder.harness);
};


