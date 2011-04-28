goog.require('core.controls.iPadShell.Model');
goog.require('core.controls.iPadShell.View');
goog.require('core.controls.iPadShell.tmpl');
goog.require('core.models.Region');


describe('core: controls/iPad_shell_spec', function() {
  var Region = core.models.Region;
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

    describe('regions', function() {
      var regions;

      beforeEach(function() {
        regions = view.model.regions;
      });

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
      var regionElements;

      beforeEach(function() {
        regionElements = view.regionElements;
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

      describe('html loading', function() {
        describe('left', function() {
          it('load html into header region', function() {
            model.regions.left.header.loadHtml('<h1>Header</h1>')
            expect($(view.regionElements.left.header).html()).toEqual('<h1>Header</h1>');
          });

          it('load html into body region', function() {
            model.regions.left.body.loadHtml('<h1>Body</h1>')
            expect($(view.regionElements.left.body).html()).toEqual('<h1>Body</h1>');
          });

          it('load html into footer region', function() {
            model.regions.left.footer.loadHtml('<h1>Footer</h1>')
            expect($(view.regionElements.left.footer).html()).toEqual('<h1>Footer</h1>');
          });
        });

        describe('main', function() {
          it('load html into header region', function() {
            model.regions.main.header.loadHtml('<h1>Header</h1>')
            expect($(view.regionElements.main.header).html()).toEqual('<h1>Header</h1>');
          });

          it('load html into body region', function() {
            model.regions.main.body.loadHtml('<h1>Body</h1>')
            expect($(view.regionElements.main.body).html()).toEqual('<h1>Body</h1>');
          });

          it('load html into footer region', function() {
            model.regions.main.footer.loadHtml('<h1>Footer</h1>')
            expect($(view.regionElements.main.footer).html()).toEqual('<h1>Footer</h1>');
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
