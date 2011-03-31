# --------------------------------------------------------
# CSS (Sass) tasks
#
# Commands:
#   $ thor list
#
# See: http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html
#
# --------------------------------------------------------

class Css < Thor
  CSS_PATH = "public/javascripts/open.core/assets/css"

  desc "watch", "Start watching the .scss (Saas) files for changes."
  def watch
    success = system("sass --watch #{CSS_PATH}/sass:#{CSS_PATH}")
    return success
  end
end
