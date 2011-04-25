goog.provide('harness.app');

goog.require('harness.controls.root.View');
goog.require('lib.jquery');

//goog.require('harness.controls.root.Model');
//goog.require('core.controls.iPadShell.Model');
//goog.require('core.controls.iPadShell.View');


/**
 * On page ready.
 */
$(function() {
  harness.start();
});


/**
 * Entry point for the TestHarness.
 */
harness.start = function() {
  var shell;
  var createRoot = function() {

    // Create the iPad shell.
    var view = new harness.controls.root.View();

    // Insert it within the DOM.
    $('body').html(view.el);

    // Finish up.
    return view.model;
  };
  shell = createRoot();

  shell.renderMainHtml('harness/welcome', function() {
    console.log('Rendered Main');
  });

};


