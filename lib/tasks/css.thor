# --------------------------------------------------------
# CSS (Sass) tasks
#
# Commands:
#   $ thor list
#
# See: http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html
#
# --------------------------------------------------------
require File.expand_path('app/util/constants.rb')


class Css < Thor
  include Constants

  desc "watch [NAME]", "Start watching the .scss (Saas) files for changes."

  def watch()
    watch_folder(CORE_CSS_PATH, true)
    watch_folder(HARNESS_CSS_PATH, true)
  end


  desc "build", "Builds all .scss files anywhere within a folder hierarchy to .css"

  def build(folder = CORE_CSS_PATH)
    puts "+ Compiling Saas stylesheets (.scss => .css)..."
    success = true

    Dir["#{folder}/**/**/*.scss"].each do |path|
      if can_compile?(path)
        name = File.basename(path, ".scss")
        parent_path = Pathname.new(File.dirname("#{path}")).parent
        output_file = "#{parent_path}/#{name}.css"


        success = false if !system("sass #{path} #{output_file}")

        puts "    > #{output_file}"

      end
    end

    puts "+ Compiled Saas stylesheets" if success
    puts "- FAILED to compile Saas stylesheets" if !success
    puts ""
    success
  end

  private

  def can_compile?(path)
    return false if File.directory?(path)
    return false if File.basename(path).match(/^_/).to_s == "_"
    true
  end


  def watch_folder(folder, continue = false)
    expr = "sass --watch #{folder}/sass:#{folder}"
    expr += " &" if continue
    system(expr)
    system("pwd")
  end
end
