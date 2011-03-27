goog.require('lib.jasmine.jquery');
goog.require('lib.jasmine.mock.ajax');

var test = {};

/**
 * Invoked before each test run from anywhere within the suite.
 */
beforeEach(function() {
});

test.spyOnJQuery = function() {
  clearAjaxRequests();

  spyOn(jQuery.ajaxSettings, 'xhr').andCallFake(function(value) {
    var newXhr = new FakeXMLHttpRequest();
    ajaxRequests.push(newXhr);
    return newXhr;
  });
};


