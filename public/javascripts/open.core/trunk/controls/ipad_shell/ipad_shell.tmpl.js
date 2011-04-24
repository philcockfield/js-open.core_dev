// This file was automatically generated from ipad_shell.soy.
// Please don't edit this file by hand.

goog.provide('core.controls.iPadShell.tmpl');

goog.require('soy');
goog.require('soy.StringBuilder');


core.controls.iPadShell.tmpl.root = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="left">');
  core.controls.iPadShell.tmpl.header(opt_data, output);
  output.append('<div class="region"></div>');
  core.controls.iPadShell.tmpl.footer(opt_data, output);
  output.append('</div><div class="main">');
  core.controls.iPadShell.tmpl.header(opt_data, output);
  output.append('<div class="region"></div>');
  core.controls.iPadShell.tmpl.footer(opt_data, output);
  output.append('</div>');
  if (!opt_sb) return output.toString();
};


core.controls.iPadShell.tmpl.header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="header"><div class="bevel highlight"></div><div class="region"></div></div>');
  if (!opt_sb) return output.toString();
};


core.controls.iPadShell.tmpl.footer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="footer"><div class="bevel highlight"></div><div class="region"></div></div>');
  if (!opt_sb) return output.toString();
};
