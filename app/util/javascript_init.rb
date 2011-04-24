class JavascriptInit
  include Constants

  def initialize(core_version)
    @core_version = core_version.blank? ? Constants::CORE_VERSION : core_version
    @core_path = "#{CORE_PATH_ROOT}/#{@core_version}"
  end

  def to_s()
    # Paths.
    closure_lib_path = "#{CLOSURE_PATH}/closure-library/closure/goog/"
    deps_js = "deps.js"
    base_js = "base.js"
    path_mapper_js = "path_mapper.js"

    # Require statements.
    require = ['lib.jquery', 'lib.underscore', 'lib.backbone']
    lib_comment = "Libs (3rd Party) | goog.require:"
    require.each do |lib|
      lib_comment << "\n *     - #{lib}"
    end

    # Opening comments.
    title = "/**
 * ---------------------------------------------------------------
 *                   Open.Core  ||  Initialization
 * ---------------------------------------------------------------
 * WARNING: Generated file.  Modifications will be overwritten.
 *
 * The following JavaScript file is a concatenation of:
 *
 *   - TypeKit
 *
 *   - Google Closure:
 *     - closure-tools:      /#{base_js}
 *     - closure-tools:      /#{deps_js}
 *     - closure-templates:  /#{deps_js}
 *
 *   - Open.Core (Version '#{@core_version}'):
 *     - Core dependencies:   /#{deps_js}
 *     - Path mapper:        /#{path_mapper_js}
 *
 *   - #{lib_comment}
 *
 * ---------------------------------------------------------------
 */
"
    builder = FileLoader.new(title)

    # Insert lines of code.
    builder.add_line("\nvar CLOSURE_NO_DEPS = true; // Don't auto-load goog/deps.js (included below).\n\n")
    builder.add_line("try{Typekit.load();}catch(e){}")

    # Add JS files.
    # - Closure
    builder.add_file("#{closure_lib_path}/#{base_js}", "Closure Tools [#{base_js}]")
    builder.add_file("#{closure_lib_path}/#{deps_js}", "Closure Tools [#{deps_js}]")
    builder.add_file("#{CLOSURE_PATH}/closure-templates/#{deps_js}", "Closure Templates [#{deps_js}]")

    # - Open.Core
    builder.add_file("#{@core_path}/#{deps_js}", "Open.Core [#{deps_js}]")
    builder.add_file("#{@core_path}/paths/#{path_mapper_js}", "Open.Core [#{path_mapper_js}]")

    # Require the generically common libraries.
    require.each do |lib|
      builder.add_line("goog.require('#{lib}');")
    end

    builder.to_s
  end


  def save(file_name = "init.js")
    js = to_s

    path = File.expand_path("#{@core_path}/#{file_name}")
    file = File.new(path, "w")
    file.write(js)
    file.close

    js
  end
end