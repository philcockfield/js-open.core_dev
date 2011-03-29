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

  desc "build", "Calls all tasks to build the project in it's entirety"

  def build
    project = "core_dev"
    puts ""
    write_build_title "START", project

    deps
    lint
    single

    write_build_title "COMPLETE", project
    puts ""
  end

  desc 'deps', "Calculate dependencies within JS files"

  def deps
    puts "+ Calculating dependencies now..."
    calc_deps "open.core"
    puts ""
  end

  desc "lint", "Runs the Google JS linter against all JS files in the project"

  def lint
    puts "+ Running JS Linter now..."
    puts "--"
    lint_on "#{CORE_PATH}/core"
  end

  desc "single", "Builds all dependencies into a single JS file"

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
    puts "+ FAILED to generate single application script file at: #{file}" if !success
    puts""
  end


  private

  def lint_on(path)
    success = system("gjslint --nojsdoc --strict --recurse #{path}")
    puts "+ Lint successful within folder: #{path}" if success
    puts "- Lint FAILED within folder: #{path}" if !success
    puts ""
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