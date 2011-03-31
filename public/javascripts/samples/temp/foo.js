// This file was automatically generated from foo.soy.
// Please don't edit this file by hand.

goog.provide('examples.temp');

goog.require('soy');
goog.require('soy.StringBuilder');


examples.temp.name = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('Hello There');
  if (!opt_sb) return output.toString();
};
