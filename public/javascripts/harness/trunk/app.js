goog.provide('harness.app');

goog.require('lib.jquery');
goog.require('core.controls.iPadShell.Model');
goog.require('core.controls.iPadShell.View');


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


  var createShell = function() {

    // Create the iPad shell.
    var ns = core.controls.iPadShell;
    var model = new ns.Model();
    var view = new ns.View({ model: model });

    // Insert it within the DOM.
    $('body').html(view.el);

    // Finish up.
    return model;
  };
  createShell();
  

};
