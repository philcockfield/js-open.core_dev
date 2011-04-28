goog.provide('harness.app');

goog.require('core.controls.button.defaultButton.View');
goog.require('core.controls.button.textButton.View');
goog.require('core.util.mobile');
goog.require('harness.controls.root.View');
goog.require('lib.jquery');



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
  var root;
  var createRoot = function() {

    // Create the iPad shell.
    var view = new harness.controls.root.View();

    // Insert it within the DOM.
    $('body').html(view.el);

    // Finish up.
    return view.model;
  };
  root = createRoot();


  // Prevent the whole screen from scrolling when dragged.
  core.util.mobile.lockPage();



  root.shell.regions.main.body.loadUrl('harness/content/welcome', {
    success: function() {
      button(function(e) {
        console.log('click: ', e.label());
      });

    }
  });


  var button = function(callback) {
    var create = function(label, Type) {
      var btn = new Type();
      btn.model.label(label);
      $('.left .region.body').append(btn.el);
      btn.model.onClick(callback);
    };

    create('Default', core.controls.button.defaultButton.View);
    create('Text Button', core.controls.button.textButton.View);
  };
};


