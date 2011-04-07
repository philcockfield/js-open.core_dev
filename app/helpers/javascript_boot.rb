class JavascriptBoot
  JS_PATH = "#{RAILS_ROOT}/public/javascripts"
  CLOSURE_PATH = "#{JS_PATH}/closure"


  def to_s
    # Paths.
    closure_lib_path = "#{CLOSURE_PATH}/closure-library/closure/goog/"

    # Opening comments.
    js = title("
 * The following generated JavaScript file is a concatenation of:
 *
 *   - Closure (Google):
 *     - closure-tools: base.js
 *     - closure-templates: deps.js
 *   - Open.Core: loader.js
 *")

    # Prevent closure from loading it's own deps.js file as
    # we will be loading it ourselves here.
    js << "var CLOSURE_NO_DEPS = true; // Don't auto-load goog/deps.js (included below).\n"

    # Insert the various .js files in order.
    js << file_to_s("Closure Tools [base.js]", "#{closure_lib_path}/base.js")
    js << file_to_s("Closure Tools [deps.js]", "#{closure_lib_path}/deps.js")
    js << file_to_s("Closure Templates [deps.js]", "#{CLOSURE_PATH}/closure-templates/deps.js")
    js << file_to_s("Open.Core [loader.js]", "#{JS_PATH}/loader.js")

    js
  end


  private

  def file_to_s(title, path)
    contents = title(title)
    File.open(path).each_line do |line|
      contents << line
    end
    contents << "\n\n"
  end


  def title(text)
    "
/**
 * ---------------------------------------------------------------
 *    #{text}
 * ---------------------------------------------------------------
 */
"
  end
end