goog.require('core.controls.json.Model');
goog.require('core.controls.json.View');



$(function() {

  var nsJson = core.controls.json;
  var view = new nsJson.View();
  view.render();

  $('body').append(view.el);



});
