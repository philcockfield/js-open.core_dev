class PagesController < ApplicationController
  def home
  end

  def javascript_boot
    js_path = "#{RAILS_ROOT}/public/javascripts"
    closure_path = "#{js_path}/closure"

    js = "
/**
 * ---------------------------------------------------------------
 *
 * The following generated JavaScript file is a concatenation of:
 *
 *   - Closure (Google):
 *     - closure-tools: base.js
 *     - closure-templates: deps.js
 *   - Open.Core: loader.js
 *
 * ---------------------------------------------------------------
 */

"
    js << file_to_s("Closure Tools [base.js]", "#{closure_path}/closure-library/closure/goog/base.js")
    js << file_to_s("Closure Templates [deps.js]", "#{closure_path}/closure-templates/deps.js")
    js << file_to_s("Open.Core [loader.js]", "#{js_path}/loader.js")

    render :inline => js, :content_type => "text/javascript"
  end

  private

  def file_to_s(title, path)
    contents = "
/**
 * ---------------------------------------------------------------
 *    #{title}
 * ---------------------------------------------------------------
 */
"
    File.open(path).each_line do |line|
      contents << line
    end
    contents << "\n\n"
  end

end
