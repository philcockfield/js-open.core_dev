# --------------------------------------------------------
# Beft environment using Google Closure tools.
#
# Commands:
#   $ thor list
#
# --------------------------------------------------------
require File.expand_path('app/helpers/constants.rb')

class Js < Thor
  include Constants

#  JS_PATH = "public/javascripts"
#  CORE_PATH = "#{JS_PATH}/open.core"
#  CLOSURE_PATH = "#{JS_PATH}/closure"
#  CLOSURE_TOOLS_PATH = "#{CLOSURE_PATH}/closure-library/closure/bin"

  desc "build", "Calls all tasks to build the project in it's entirety"

  def build
    project = "core_dev"
    puts ""
    write_build_title "START", project
    success = true

    success = false if !Tmpl.new.build
    success = false if !Css.new.build
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

    success = false if !calc_deps "#{CLOSURE_PATH}/closure-library/closure/goog", "{closure-lib}"
    success = false if !calc_deps CLOSURE_TMPL_PATH, "{closure-tmpl}"
    success = false if !calc_deps "#{JS_PATH}/open.core", "{open.core}"
    success = false if !calc_deps "#{JS_PATH}/test", "{open.core}"

    puts "+ SUCCESS generating deps files" if success
    puts "- FAILED to generate deps files" if !success
    puts ""
    success
  end

  desc "lint", "Runs the Google JS linter against all JavaScript files in the project"

  def lint
    puts "+ Running JS Linter now..."
    puts "--"
    lint_on JS_PATH, "#{CORE_PATH}/lib, #{JS_PATH}/closure"
  end

  desc "lint_help", "Outputs the lint option flags"

  def lint_help
    system("gjslint --help")
  end


  desc "tmpl", "Builds all soy templates (see tmpl.thor)"
  def tmpl
    Tmpl.new.build
  end

  desc "single", "Copies all dependencies into a single JavaScript file"

  def single
    puts "+ Generating single application script now..."
    file = "#{JS_PATH}/application-single.js"
    success = system("
                     #{CLOSURE_TOOLS_PATH}/calcdeps.py \
                        -i #{JS_PATH}/application.js \
                        -p #{CLOSURE_PATH}/closure-library/ \
                        -p #{CLOSURE_PATH}/closure-templates/ \
                        -p #{JS_PATH}/open.core/ \
                        -p #{JS_PATH}/test/ \
                        -o script > #{file}
                     ")
    puts "+ Generated single application script file at: #{file}" if success
    puts "- FAILED to generate single application script file at: #{file}" if !success
    puts ""
    success
  end


  private

  def lint_on(path, exclude_dirs = nil)
    success = system("
                      gjslint \
                          --nojsdoc \
                          --recurse #{path} \
                          --exclude_directories '#{exclude_dirs}' \
                          --exclude_files 'application-single.js, deps.js, #{get_tmpl_files(path)}'
                     ")
    puts "+ Lint successful within folder: #{path}" if success
    puts "- Lint FAILED within folder: #{path}" if !success
    puts ""
    success
  end

  def get_tmpl_files(path)
    Dir["#{path}/**/*.tmpl.js"].collect { |f| File.basename(f) }.join(", ")
  end


  def calc_deps(folder, prefix = "../../../..")
    output_file = "#{folder}/deps.js"

    # Remove the 'public/' prefix - causes pathing error.
    sub_folder = folder.gsub("public/", "")

    success = system("
                     #{CLOSURE_TOOLS_PATH}/build/depswriter.py  \
           --root_with_prefix='#{folder} #{prefix}/#{sub_folder}' \
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