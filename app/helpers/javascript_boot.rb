class JavascriptBoot
  JS_PATH = "#{RAILS_ROOT}/public/javascripts"
  CLOSURE_PATH = "#{JS_PATH}/closure"


  def to_s
    js = title("
 * The following generated JavaScript file is a concatenation of:
 *
 *   - Closure (Google):
 *     - closure-tools: base.js
 *     - closure-templates: deps.js
 *   - Open.Core: loader.js
 *")

    js << file_to_s("Closure Tools [base.js]", "#{CLOSURE_PATH}/closure-library/closure/goog/base.js")
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