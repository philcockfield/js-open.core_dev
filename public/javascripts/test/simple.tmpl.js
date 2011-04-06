// This file was automatically generated from simple.soy.
// Please don't edit this file by hand.

goog.provide('examples.simple1');

goog.require('soy');
goog.require('soy.StringBuilder');


examples.simple1.helloWorld = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('Hello World!');
  if (!opt_sb) return output.toString();
};
