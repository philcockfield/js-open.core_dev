goog.provide('core.global');


/**
 * Gets the version of [Open.Core].
 */
core.version = '1.0.0';

/**
 * Gets the pathing details for the library.
 * @param {string=} root path, if omitted the default value
 *            specified in the LOADER.paths is used.
 */
core.Paths = function(root) {
  if (!root) root = LOADER.paths.folder.core;
  var assets = root + '/assets';
  var images = assets + '/images';
  var css = assets + '/css';

  return {
    root: root,
    assets: assets,
    images: images,
    css: css
  };
};


/**
 * Creates an instance of the paths object
 * with sub-folders for images and CSS.
 * @param {string} subFolder for where images/css are stored.
 * @param {string=} root path, if omitted the default value
 *            specified in the LOADER.paths is used.
 */
core.createPaths = function(subFolder, root) {
  var paths = new core.Paths(root);
  paths.images = paths.images + '/' + subFolder;
  paths.css = paths.css + '/' + subFolder;
  return paths;
};
