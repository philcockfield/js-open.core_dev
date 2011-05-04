goog.provide('core.controls.button.defaultButton.View');


goog.require('core.controls.button.View');
goog.require('core.css');
goog.require('lib.jquery');
goog.require('lib.jqueryUI');


/**
 * A default rectangular all purpose button.
 */
core.controls.button.defaultButton.View = core.controls.button.View.extend({
  tagName: 'button',
  className: 'core default button',


  /**
   * Constructor.
   */
  initialize: function() {
    var self = this;
    core.controls.button.View.prototype.initialize.call(this);

    _.bindAll(this, 'render', 'updateState', 'updateLabel', 'setOption');
    this.paths = core.controls.button.defaultButton.View.paths;

    // Initialize as jQuery button.
    $(this.el).button();
    self.updateLabel();

    // Wire up events.
    $(this.el).click(function() {
      self.model.click();
    });

    this.model.bind('change:label', function() {
      self.updateLabel();
    });

    this.model.bind('change:isEnabled', function() {
      self.updateState();
    });
  },



  /**
   * Updates the state of the button View based
   * on the current state of the model.
   */
  updateState: function() {
    this.setOption('disabled', !this.model.isEnabled());
  },

  /**
   * Syncs the text of the button View with
   * the current text value of the model.
   */
  updateLabel: function() {
    this.setOption('label', this.model.label());
  },

  setOption: function(option, value) {
    $(this.el).button('option', option, value);
  }
},



/**
 * Class properties.
 */
{
  paths: function() {
    return core.createPaths('/button.default');
  }()
});
