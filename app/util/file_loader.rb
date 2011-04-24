class FileLoader

  def initialize(title_comment = nil)
    @text = title_comment || ""
  end

  def add_line(text)
    @text << text
    self
  end

  def add_file(path, title = nil)
    @text << file_to_s(title, path)
    self
  end

  def to_s
    @text
  end

  private

  def full_path(path)
    "#{RAILS_ROOT}/#{path}"
  end

  def file_to_s(title, path)
    contents = title.blank? ? "" : title(title)
    File.open(full_path(path)).each_line do |line|
      contents << line
    end
    contents << "\n\n"
  end

  def title(text)
    "/**
 * ---------------------------------------------------------------
 *    #{text}
 * ---------------------------------------------------------------
 */

"
  end
end