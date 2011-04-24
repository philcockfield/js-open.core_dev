module Constants
  USE_LOCAL = true

  CORE_SERVER_LOCAL = "http://localhost:3333"
  CORE_SERVER_REMOTE = "http://opencore.heroku.com"

  CORE_VERSION = "trunk"

  JS_PATH = "public/javascripts"
  CORE_NAME = "open.core"
  CORE_PATH_ROOT = "#{JS_PATH}/#{CORE_NAME}"
  CORE_PATH = "#{CORE_PATH_ROOT}/#{CORE_VERSION}"
  CORE_CSS_PATH = "#{CORE_PATH}/assets/css"

  CORE_URL = "/javascripts/#{CORE_NAME}/#{CORE_VERSION}"
  CORE_CSS_URL = "#{CORE_URL}/assets/css"


  CLOSURE_PATH = "#{JS_PATH}/closure/2011_04_06"
  CLOSURE_TOOLS_PATH = "#{CLOSURE_PATH}/closure-library/closure/bin"
  CLOSURE_TMPL_PATH = "#{CLOSURE_PATH}/closure-templates"
end