# --------------------------------------------------------
# Build the JavaScript environment using Google Closure tools.
#
# Commands:
#   $ thor list
#
# --------------------------------------------------------

class Js < Thor
  JS_PATH = "public/javascripts"
  CORE_PATH = "#{JS_PATH}/open.core"
  CLOSURE_PATH = "#{JS_PATH}/closure-library/closure/bin"
  CLOSURE_TMPL_PATH = "#{JS_PATH}/closure-templates/"

  desc "build", "Calls all tasks to build the project in it's entirety"

  def build
    project = "core_dev"
    puts ""
    write_build_title "START", project
    success = true

    success = false if !templates
    success = false if !deps
    success = false if !lint
    success = false if !single

    write_build_title("FAILED", project) if !success
    write_build_title("SUCCESS", project) if success
    puts ""
    success
  end

  desc 'deps', "Calculate dependencies within all JavaScript files to generate deps.js"

  def deps
    puts "+ Calculating dependencies now..."
    success = true

    success = false if !calc_deps "open.core"

    puts ""
    success
  end

  desc "lint", "Runs the Google JS linter against all JavaScript files in the project"

  def lint
    puts "+ Running JS Linter now..."
    puts "--"
    lint_on "#{CORE_PATH}/core"
  end

  desc "single", "Copies all dependencies into a single JavaScript file"

  def single
    puts "+ Generating single application script now..."
    file = "#{JS_PATH}/application-single.js"
    success = system("
                     #{CLOSURE_PATH}/calcdeps.py \
                        -i #{JS_PATH}/application.js \
                        -p #{JS_PATH}/closure-library/ \
                        -p #{JS_PATH}/open.core/ \
                        -o script > #{file}
                     ")
    puts "+ Generated single application script file at: #{file}" if success
    puts "- FAILED to generate single application script file at: #{file}" if !success
    puts ""
    success
  end

  desc "templates", "Builds soy templates"

  def templates(path = JS_PATH)
    puts "+ Compiling soy templates"

    success = compile_templates(path)

    puts "+ Compiled soy templates" if success
    puts "- FAILED to compile soy templates" if !success
    puts ""
    success
  end

  private

  def walk_dir(dir, &blk)
    dir.entries.each do |entry|
      if !hidden?(entry)
        # Calculate paths.
        entry_path = "#{dir.path}/#{entry}"
        is_dir = FileTest.directory?(entry_path)

        # Execute the block if it's a file.
        yield File.new(entry_path) if !is_dir && block_given?

        # RECURSION: Walk children if it's a folder.
        walk_dir(Dir.new(entry_path), &blk) if is_dir
      end
    end
  end

  def hidden?(name)
    name.match(/^./).to_s == "."
  end


  def compile_templates(folder_path)
    success = true

    walk_dir Dir.new(folder_path) do |file|

      is_soy = file.path.match(/.soy$/).to_s == '.soy'
      if (is_soy)
        file_name = File.basename(file.path, ".soy")
        dir_name = File.dirname(file.path)
        success = false if !compile_template(dir_name, file_name)
      end

    end
    success
  end


  def compile_template(path, file_name)
    compiler = "#{JS_PATH}/closure-templates/SoyToJsSrcCompiler.jar"
    input_file = "#{path}/#{file_name}.soy"
    output_file = "#{path}/#{file_name}.js"

    success = system("
                      java -jar #{compiler} \
                      --outputPathFormat #{output_file} \
                      --shouldProvideRequireSoyNamespaces \
                     #{input_file}
                     ")

    puts "  >> Compiled template: #{output_file}" if success
    puts "  >> FAILED to compile template: #{output_file}" if !success
    success
  end

  def lint_on(path)
    success = system("gjslint --nojsdoc --strict --recurse #{path}")
    puts "+ Lint successful within folder: #{path}" if success
    puts "- Lint FAILED within folder: #{path}" if !success
    puts ""
    success
  end

  def calc_deps(folder)
    path = "#{JS_PATH}/#{folder}"
    output_file = "#{path}/deps.js"
    success = system("
                     #{CLOSURE_PATH}/build/depswriter.py  \
           --root_with_prefix='#{path} ../../../#{folder}' \
           > #{output_file}
                     ")
    puts "+ Generated closure dependency file at: #{output_file}" if success
    puts "- FAILED to generate closure dependency file at: #{output_file}" if !success
    success
  end

  def write_build_title(section, project)
    write_title " #{section} - Building JavaScript project: #{project}"
  end

  def write_title(msg)
    puts "---------------------------------------------------------"
    puts " " + msg
    puts "---------------------------------------------------------"
  end
end