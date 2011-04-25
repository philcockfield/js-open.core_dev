goog.require('core.controls.iPadShell.Model');
goog.require('core.controls.iPadShell.View');
goog.require('core.controls.iPadShell.tmpl');



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
      describe('left', function() {
        it('has header region', function() {
          expect(view.regions.left.header).toBeDefined();
          expect(view.regions.left.header).toEqual(view.$('.left .header .region').get(0));
        });

        it('has body region', function() {
          expect(view.regions.left.body).toBeDefined();
          expect(view.regions.left.body).toEqual(view.$('.left > .region').get(0));
        });

        it('has footer region', function() {
          expect(view.regions.left.footer).toBeDefined();
          expect(view.regions.left.footer).toEqual(view.$('.left .footer .region').get(0));
        });
      });

      describe('main', function() {
        it('has header region', function() {
          expect(view.regions.main.header).toBeDefined();
          expect(view.regions.main.header).toEqual(view.$('.main .header .region').get(0));
        });

        it('has body region', function() {
          expect(view.regions.main.body).toBeDefined();
          expect(view.regions.main.body).toEqual(view.$('.main > .region').get(0));
        });

        it('has footer region', function() {
          expect(view.regions.main.footer).toBeDefined();
          expect(view.regions.main.footer).toEqual(view.$('.main .footer .region').get(0));
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
