# Open.Core (Development)

The [Open.Core](https://github.com/philcockfield/js-open.core) library is a pure JavaScript implementation.
To assist in make testing, and other development conveniences, this is a supporting project built in
[Rails](http://rubyonrails.org/).
See the [Open.Core repository](https://github.com/philcockfield/js-open.core).

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
##Google Closure

Open.Core uses [Google Closure Tools](http://code.google.com/closure/) for dependency management and minification (compiling). 
If you want to use Google Closure too, pull the
[closure-library](https://github.com/jarib/google-closure-library.git public/javascripts/closure-library)
into your project, like this:

`git submodule add https://github.com/jarib/google-closure-library.git public/javascripts/closure-library`

_Note: You may want to keep closure-library outside of your project repository, however we find that during development
it's easiest to keep it within your static javascripts folder (wherever that happens to be).
This makes it easy to reference and serve all the loose .js files it needs to while in debug mode.
Then in production, only the self-contained compiled .js files (ether a single file, or just a few) are deployed._

#### See also:

* [Getting started with Google Closure](http://code.google.com/closure/library/docs/gettingstarted.html)
* [Namespaces and Dependency Management - goog.provide() and goog.require()](http://code.google.com/closure/library/docs/introduction.html)
* [Compiling your JavaScript](http://code.google.com/closure/library/docs/calcdeps.html)
* [Closure API Reference](http://closure-library.googlecode.com/svn/docs/index.html)
