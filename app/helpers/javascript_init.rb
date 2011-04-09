class JavascriptInit
  JS_PATH = "#{RAILS_ROOT}/public/javascripts"
  CLOSURE_PATH = "#{JS_PATH}/closure"


  def to_s
    # Paths.
    closure_lib_path = "#{CLOSURE_PATH}/closure-library/closure/goog/"
    deps_js = "deps.js"
    base_js = "base.js"
    path_mapper_js = "pathMapper.js"

    # Opening comments.
    js = title("   [Open.Core] Page Initialization
 #{div}
 * The following generated JavaScript file is a concatenation of:
 *
 *   - Google Closure:
 *     - closure-tools:      /#{base_js}
 *     - closure-tools:      /#{deps_js}
 *     - closure-templates:  /#{deps_js}
 *   - Open.Core:            /#{path_mapper_js}
 *")

    # Prevent closure from loading it's own deps.js file as
    # we will be loading it ourselves here.
    js << "\nvar CLOSURE_NO_DEPS = true; // Don't auto-load goog/deps.js (included below).\n\n"

    # Insert the various .js files in order.
    js << file_to_s("Closure Tools [base.js]", "#{closure_lib_path}/#{base_js}")
    js << file_to_s("Closure Tools [deps.js]", "#{closure_lib_path}/#{deps_js}")
    js << file_to_s("Closure Templates [deps.js]", "#{CLOSURE_PATH}/closure-templates/#{deps_js}")
    js << file_to_s("Open.Core [init.js]", "#{JS_PATH}/#{path_mapper_js}")

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
 #{div}
 *    #{text}
 #{div}
 */
"
  end

  def div(length = 65)
    "* #{'-' * length}"
  end
end