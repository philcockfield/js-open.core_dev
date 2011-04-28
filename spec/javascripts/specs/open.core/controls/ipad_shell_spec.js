goog.require('core.controls.iPadShell.Model');
goog.require('core.controls.iPadShell.View');
goog.require('core.controls.iPadShell.tmpl');
goog.require('core.models.Region');


describe('core: controls/iPad_shell_spec', function() {
  var shell;
  var model, view;

  beforeEach(function() {
    shell = core.controls.iPadShell;
    view = new shell.View();
    model = view.model;
  });


  describe('Model', function() {
    it('is provided', function() {
      expect(core.controls.iPadShell.Model).toBeDefined();
    });

    it('is an MVC Model', function() {
      expect(core.isInstanceOfType(model, shell.Model)).toBeTruthy();
    });

    it('calls base class on creation', function() {
      expect(model.isVisible).toBeDefined();
    });
  });

  describe('View', function() {
    it('is provided', function() {
      expect(core.controls.iPadShell.View).toBeDefined();
    });

    it('is an MVC View', function() {
      expect(core.isInstanceOfType(view, shell.View)).toBeTruthy();
    });

    it('has CSS classes', function() {
      expect(view.el.className).toEqual('core shell ipad');
    });


    describe('model', function() {
      it('creates a model if not specified at creation', function() {
        expect(new shell.View().model).toBeDefined();
      });

      it('uses the model passed at creation', function() {
        expect(new shell.View({ model: model }).model).toEqual(model);
      });
    });


    describe('render', function() {
      it('renders upon creation', function() {
        expect($(view.el).children().length).not.toEqual(0);
      });
    });

    describe('regions', function() {
      var Region = core.models.Region;
      var regions, regionElements;

      beforeEach(function() {
        regionElements = view.regionElements;
        regions = view.model.regions;
      });

      describe('models', function() {
        describe('left', function() {
          it('has header region', function() {
            expect(core.isInstanceOfType(regions.left.header, Region)).toBeTruthy();
          });

          it('has body region', function() {
            expect(core.isInstanceOfType(regions.left.body, Region)).toBeTruthy();
          });

          it('has footer region', function() {
            expect(core.isInstanceOfType(regions.left.footer, Region)).toBeTruthy();
          });
        });

        describe('main', function() {
          it('has header region', function() {
            expect(core.isInstanceOfType(regions.main.header, Region)).toBeTruthy();
          });

          it('has body region', function() {
            expect(core.isInstanceOfType(regions.main.body, Region)).toBeTruthy();
          });

          it('has footer region', function() {
            expect(core.isInstanceOfType(regions.main.footer, Region)).toBeTruthy();
          });
        });
      });

      describe('elements', function() {
        describe('left', function() {
          it('has header region', function() {
            expect(regionElements.left.header).toBeDefined();
            expect(regionElements.left.header).toEqual(view.$('.left .header .region').get(0));
          });

          it('has body region', function() {
            expect(regionElements.left.body).toBeDefined();
            expect(regionElements.left.body).toEqual(view.$('.left > .region').get(0));
          });

          it('has footer region', function() {
            expect(regionElements.left.footer).toBeDefined();
            expect(regionElements.left.footer).toEqual(view.$('.left .footer .region').get(0));
          });
        });

        describe('main', function() {
          it('has header region', function() {
            expect(regionElements.main.header).toBeDefined();
            expect(regionElements.main.header).toEqual(view.$('.main .header .region').get(0));
          });

          it('has body region', function() {
            expect(regionElements.main.body).toBeDefined();
            expect(regionElements.main.body).toEqual(view.$('.main > .region').get(0));
          });

          it('has footer region', function() {
            expect(regionElements.main.footer).toBeDefined();
            expect(regionElements.main.footer).toEqual(view.$('.main .footer .region').get(0));
          });
        });
      });
    });
  });

  describe('Template (tmpl)', function() {
    it('is provided', function() {
      expect(core.controls.iPadShell.tmpl).toBeDefined();
    });
  });

});
