module Constants
  # General
  USE_LOCAL = true
  JS_PATH = "public/javascripts"


  # Open.Core
  CORE_VERSION = "trunk"
  CORE_SERVER_LOCAL = "http://localhost:3333"
  CORE_SERVER_REMOTE = "http://opencore.heroku.com"

  CORE_FOLDER = "open.core"
  CORE_PATH_ROOT = "#{JS_PATH}/#{CORE_FOLDER}"
  CORE_PATH = "#{CORE_PATH_ROOT}/#{CORE_VERSION}"
  CORE_CSS_PATH = "#{CORE_PATH}/assets/css"

  CORE_URL = "/javascripts/#{CORE_FOLDER}/#{CORE_VERSION}"
  CORE_CSS_URL = "#{CORE_URL}/assets/css"


  # Google Closure
  CLOSURE_PATH = "#{JS_PATH}/closure/2011_04_06"
  CLOSURE_TOOLS_PATH = "#{CLOSURE_PATH}/closure-library/closure/bin"
  CLOSURE_TMPL_PATH = "#{CLOSURE_PATH}/closure-templates"


  # TestHarness
  HARNESS_VERSION = "trunk"
  HARNESS_FOLDER = "harness"
  HARNESS_PATH_ROOT = "#{JS_PATH}/#{HARNESS_FOLDER}"
  HARNESS_PATH = "#{HARNESS_PATH_ROOT}/#{HARNESS_VERSION}"
  HARNESS_CSS_PATH = "#{HARNESS_PATH}/assets/css"

  HARNESS_URL = "/javascripts/#{HARNESS_FOLDER}/#{HARNESS_VERSION}"
  HARNESS_CSS_URL = "#{HARNESS_URL}/assets/css"
  

end