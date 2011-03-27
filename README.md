# Open.Core (Development)

The [Open.Core](https://github.com/philcockfield/js-open.core) library is a pure JavaScript implementation.
To assist in make testing, and other development conveniences, this is a supporting project built in
[Rails](http://rubyonrails.org/).
See the [Open.Core repository](https://github.com/philcockfield/js-open.core).

---

## Testing - Jasmine (BDD)
To setup Jasmine in your environment, make sure you have Ruby 1.9.2 installed.
Then, open the terminal window to the root of 'core_dev' and install the
[Jasmine gem](https://github.com/pivotal/jasmine-gem):

   `gem install jasmine`

To start the test runner:

   `rake jasmine`

Tests can be run from: [http://localhost:8888/](http://localhost:8888/)
The jQuery (and DOM fixture) testing is enabled for Jasmine via the
[jasmine-jquery](https://github.com/velesin/jasmine-jquery) plugin.
