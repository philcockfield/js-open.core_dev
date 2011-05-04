goog.provide('core.global');
goog.require('goog.string');


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
  paths.subFolder = subFolder;
  paths.images = paths.images + '/' + subFolder;
  paths.css = paths.css + '/' + subFolder;
  return paths;
};


/** ------------------------------------------------
 *            Convenience methods on 'core'
 *  ------------------------------------------------ */

/**
 * Does simple python-style string substitution.
 * subs("foo%s hot%s", "bar", "dog") becomes "foobar hotdog".
 * @param {string} str The string containing the pattern.
 * @param {...*} var_args The items to substitute into the pattern.
 * @return {string} A copy of {@code str} in which each occurrence of
 *     {@code %s} has been replaced an argument from {@code var_args}.
 */
core.subs = function(str, var_args) {
  return goog.string.subs(str, var_args);
};
