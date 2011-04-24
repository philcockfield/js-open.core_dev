class JavascriptPaths
  def initialize(use_local, version)
    use_local = Constants::USE_LOCAL if use_local.blank?
    version = Constants::CORE_VERSION if version.blank?
    @folder = "#{Constants::CORE_PATH_ROOT}/#{version}/paths"

    # Load the paths.js file.
    builder = FileLoader.new
    builder.add_file("#{@folder}/paths.jst")
    js = builder.to_s

    # Replace tokens with values.
    js = js.gsub("{{USE_LOCAL}}", use_local.to_s)
    js = js.gsub("{{CORE_SERVER_LOCAL}}", Constants::CORE_SERVER_LOCAL)
    js = js.gsub("{{CORE_SERVER_REMOTE}}", Constants::CORE_SERVER_REMOTE)
    js = js.gsub("{{CORE_FOLDER}}", Constants::CORE_FOLDER)
    js = js.gsub("{{CORE_VERSION}}", Constants::CORE_VERSION)

    js = js.gsub("{{HARNESS_FOLDER}}", Constants::HARNESS_FOLDER)
    js = js.gsub("{{HARNESS_VERSION}}", Constants::CORE_VERSION)

    # Finish up.
    @js = js
  end

  def to_s
    @js
  end

  def save(file_name)
    js = to_s

    path = File.expand_path("#{@folder}/#{file_name}")
    file = File.new(path, "w")
    file.write(js)
    file.close

    js
  end
end