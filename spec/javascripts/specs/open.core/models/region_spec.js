goog.require('core.models.Region');
goog.require('core.models.Control');


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

});
