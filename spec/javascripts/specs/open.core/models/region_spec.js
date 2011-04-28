goog.require('core.models.Region');
goog.require('core.models.Control');
goog.require('lib.jquery');


describe('core: models/region_spec', function() {
  var region;

  beforeEach(function() {
    region = new core.models.Region();
  });

  it('is provided', function() {
    expect(core.models.Region).toBeDefined();
  });

  it('is an MVC Model', function() {
    expect(core.isInstanceOfType(region, core.models.Control)).toBeTruthy();
  });

  it('calls base constructor', function() {
    expect(region.isVisible).toBeDefined();
  });


  describe('loadHtml', function() {

    var ajaxParams;

    beforeEach(function() {
      ajaxParams = null;
      spyOn(jQuery, 'ajax').andCallFake(function(params) {
        ajaxParams = params;
      });
    });

    it('calls through to jQuery load method', function() {
      region.loadHtml('foo.html');
      expect(ajaxParams.url).toEqual('foo.html');
    });

    it('fires event, with html, on success', function() {
      var html;
      region.bind('load:html', function(e) { html = e; });

      region.loadHtml('foo.html');
      ajaxParams.success('Html');
      expect(html).toEqual('Html');
    });

    it('invokes success callback', function() {
      var html;
      region.loadHtml('foo.html', {
        success: function(data) { html = data; }
      });

      ajaxParams.success('Html');
      expect(html).toEqual('Html');
    });

    it('invokes error callback', function() {
      var xhr, status;
      region.loadHtml('foo.html', {
        error: function(eXhr, eStatus) { xhr = eXhr, status = eStatus; }
      });

      var fakeXhr = {  };
      ajaxParams.complete(fakeXhr, 'error');
      expect(xhr).toEqual(fakeXhr);
      expect(status).toEqual('error');
    });

    it('does not invoke error callback on success', function() {
      var xhr, status;
      region.loadHtml('foo.html', {
        error: function(eXhr, eStatus) { xhr = eXhr, status = eStatus; }
      });

      ajaxParams.complete({}, 'success');
      expect(xhr).not.toBeDefined();
      expect(status).not.toBeDefined();
    });
  });
});
