# Open.Core (Development)

The [Open.Core](https://github.com/philcockfield/js-open.core) library is a pure JavaScript implementation
with no server-side dependencies.
This supporting [Rails](http://rubyonrails.org/) project provides tests, build scripts and other development
conveniences, allowing the core repository to remain clean so that it can be pulled into projects
(for example by using a [Git Submodule](http://book.git-scm.com/5_submodules.html))
without also bringing down a lot of cruft.
  
See the [Open.Core](https://github.com/philcockfield/js-open.core) repository.

---
## Testing - Jasmine (BDD)
To setup Jasmine in your environment, make sure you have Ruby 1.9.2 installed.
Then open the terminal window to the root of `core_dev` and install the
[Jasmine gem](https://github.com/pivotal/jasmine-gem):

   `gem install jasmine`

To start the test runner:

   `rake jasmine`

Tests can be run from: [http://localhost:8888/](http://localhost:8888/)
The jQuery (and DOM fixture) testing is enabled for Jasmine via the
[jasmine-jquery](https://github.com/velesin/jasmine-jquery) plugin.


---
## Testing - Mocking Backbone Model Ajax
[Backbone.js](http://documentcloud.github.com/backbone/#Model-fetch) models have built in AJAX support for reading
and persisting data to the server using a an ROA (Resource Oriented Architecture) style.

### Fetch Method
You can easily mock out AJAX fetch operations like this:

    Backbone.mock.respondTo('foo/1').withValue({ foo: 'fake' });

Now when a model that has the url of `foo/1` attempts to fetch, the
object is returned, and no XHR server interaction occurs.  
For example:

    Model = Backbone.Model.extend({
      defaults: {
        foo: 'bar'
      }
    });

    var model = new Model();
    model.url = 'foo/1';
    model.fetch();

    model.get('foo') // => 'fake'

---
## Google Closure

Open.Core uses [Google Closure Tools](http://code.google.com/closure/) for dependency management
and minification (compiling). 


### Building and Linting JavaScript with Closure Tools
There is a `thor` task to perform the various build operations on JavaScript
in `open.core` using Google Closure tools.
To see a list of all the available tasks, run:

 `thor list`

To run the complete build operation, run:

 `thor js:build`

#### Coding Style ([Linter](http://code.google.com/closure/utilities/))
The linter needs to be installed on your machine.  To install on OSX:

  `sudo easy_install http://closure-linter.googlecode.com/files/closure_linter-latest.tar.gz`


#### See also:

* [Getting started with Google Closure](http://code.google.com/closure/library/docs/gettingstarted.html)
* [Namespaces and Dependency Management - goog.provide() and goog.require()](http://code.google.com/closure/library/docs/introduction.html)
* [Compiling your JavaScript](http://code.google.com/closure/library/docs/calcdeps.html)
* [Closure API Reference](http://closure-library.googlecode.com/svn/docs/index.html)
* [Closure Templates Compilation](http://code.google.com/closure/templates/docs/javascript_usage.html#compilation)

