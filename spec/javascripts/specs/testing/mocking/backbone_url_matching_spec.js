goog.require('open.core.testing.backbone');

describe('Backbone matching URLs with mock data', function() {
  var fakeValue, Model;

  beforeEach(function() {
    test.spyOnJQuery();

    Backbone.mock.clear();
    fakeValue = { foo: 'fake' };

    Model = Backbone.Model.extend({
      defaults: {
        foo: 'bar'
      }
    });
  });


  describe('namespace', function() {
    it('provides: open.core.testing.backbone', function() {
      expect(open.core.testing.backbone).toBeDefined();
    });

    it('exposes Backbone.mock', function() {
      expect(Backbone.mock).toBeDefined();
    });
  });

  xdescribe('respondTo (url)', function() {
    it('has as respondTo function', function() {
      expect(Backbone.mock.respondTo).toBeDefined();
    });


    it('registers a single URL', function() {
      Backbone.mock.respondTo('url/1');
      expect(Backbone.mock.urls().length).toEqual(1);
    });


    it('registers multiple URLs', function() {
      Backbone.mock.respondTo('url/1');
      Backbone.mock.respondTo('url/2');
      expect(Backbone.mock.urls().length).toEqual(2);
    });


    it('registers the same URL only once', function() {
      Backbone.mock.respondTo('url/1');
      Backbone.mock.respondTo('url/1');
      Backbone.mock.respondTo('url/1');
      expect(Backbone.mock.urls().length).toEqual(1);
    });


    it('has the URL on the return object', function() {
      expect(Backbone.mock.respondTo('url/1').url).toEqual('url/1');
    });

    it('exposes the set of registered URLs', function() {
      Backbone.mock.respondTo('url/1');
      Backbone.mock.respondTo('url/2');
      expect(Backbone.mock.urls()[1]).toEqual('url/2');
    });


    it('clears registered URLs', function() {
      Backbone.mock.respondTo('url/1');
      Backbone.mock.respondTo('url/2');
      Backbone.mock.clear();
      expect(Backbone.mock.urls().length).toEqual(0);
    });
  });

  xdescribe('respondsTo (url)', function() {
    it('does respond to a url', function() {
      Backbone.mock.respondTo('url/1');
      expect(Backbone.mock.respondsTo('url/1')).toBeTruthy();
    });

    it('does not respond to a url', function() {
      Backbone.mock.respondTo('url/2');
      expect(Backbone.mock.respondsTo('url/1')).toBeFalsy()
    });
  });

  xdescribe('remove (url)', function() {
    it('removes a specific url', function() {
      Backbone.mock.respondTo('url/1');
      Backbone.mock.respondTo('url/2');
      Backbone.mock.respondTo('url/3');

      Backbone.mock.remove('url/2');
      expect(Backbone.mock.respondsTo('url/2')).toBeFalsy();
    });

    it('does not remote a url that does not exist', function() {
      Backbone.mock.respondTo('url/1');
      Backbone.mock.remove('foo');
      Backbone.mock.remove('bar');
      expect(Backbone.mock.urls().length).toEqual(1);
    });
  });

  xdescribe('responds withValue', function() {
    var respondTo;

    beforeEach(function() {
      respondTo = Backbone.mock.respondTo('url/1');
    });

    it('registers a value (data)', function() {
      respondTo.withValue(fakeValue);
      expect(respondTo.data).toEqual(fakeValue);
    });

    it('changes the response value', function() {
      respondTo.withValue(fakeValue);
      respondTo.withValue({ value: 1 });
      expect(respondTo.data).not.toEqual(fakeValue);
    });
  });

  describe('Model', function() {
    var model, request;

    beforeEach(function() {
      model = new Model();
      request = null;
    });

    describe("sample model (baseline)", function() {
      it("should have default values", function() {
        expect(model.get("foo")).toEqual("bar");
      });
    });

    describe("fetch method", function() {

      describe("returning fake data", function() {
        it("should have fake response in model's property", function() {
          Backbone.mock.respondTo('url/1').withValue({ foo: 'fake' });
          model.url = 'url/1';
          model.fetch();
          expect(model.get('foo')).toEqual('fake');
        });

        it('fake response when there are multiple urls registered', function() {
          Backbone.mock.respondTo('url/1').withValue({ foo: 1 });
          Backbone.mock.respondTo('url/2').withValue({ foo: 2 });
          Backbone.mock.respondTo('url/3').withValue({ foo: 3 });
          model.url = 'url/2'

          model.fetch();
          expect(model.get('foo')).toEqual(2);
        });
      });
    });
  });

});
