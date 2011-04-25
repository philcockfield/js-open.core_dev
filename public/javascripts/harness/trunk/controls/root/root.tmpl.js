// This file was automatically generated from root.soy.
// Please don't edit this file by hand.

goog.provide('harness.controls.root.tmpl');

goog.require('soy');
goog.require('soy.StringBuilder');


harness.controls.root.tmpl.mainFooter = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img class="logo" src="', soy.$$escapeHtml(opt_data.view.paths.images), '/harness_logo.png" />');
  if (!opt_sb) return output.toString();
};
