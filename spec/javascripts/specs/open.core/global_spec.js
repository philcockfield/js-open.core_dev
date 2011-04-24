goog.require('core.global');

describe('core: global_spec', function() {

  it('is provided', function() {
    expect(core.global).toBeDefined();
  });

  it('has version', function() {
    expect(core.version).toBeDefined();
  });

});
