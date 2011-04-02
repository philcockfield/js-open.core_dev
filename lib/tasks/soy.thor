# --------------------------------------------------------
# Build the Google Closure templates (.soy)
#
# Commands:
#   $ thor list
#
# --------------------------------------------------------

class Soy < Thor
  CLOSURE_TMPL_PATH = "#{Js::JS_PATH}/closure-templates"


  desc "build", "Builds closure templates (.soy => .js)"

  def build(path = Js::JS_PATH)
    puts "+ Compiling soy templates (.soy => .js)"

    success = compile_templates(path)

    puts "+ Compiled soy templates" if success
    puts "- FAILED to compile soy templates" if !success
    puts ""
    success
  end


  private

  def compile_templates(folder_path)
    success = true
    Dir["#{folder_path}/**/**"].each do |path|
      is_soy = path.match(/.soy$/).to_s == '.soy'
      if (is_soy && !hidden?(path))
        file_name = File.basename(path, ".soy")
        dir_name = File.dirname(path)
        success = false if !compile_template(dir_name, file_name)
      end
    end
    success
  end


  def compile_template(path, file_name)
    compiler = "#{CLOSURE_TMPL_PATH}/SoyToJsSrcCompiler.jar"
    input_file = "#{path}/#{file_name}.soy"
    output_file = "#{path}/#{file_name}.tmpl.js"

    success = system("
                      java -jar #{compiler} \
                      --outputPathFormat #{output_file} \
                      --shouldProvideRequireSoyNamespaces \
                     #{input_file}
                     ")

    puts "    > Compiled template: #{output_file}" if success
    puts "    > FAILED to compile template: #{output_file}" if !success
    success
  end


  def hidden?(name)
    name.match(/^./).to_s == "."
  end
end
