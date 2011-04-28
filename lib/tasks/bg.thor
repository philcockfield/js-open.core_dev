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


class Bg < Thor
  include Constants

  @@foo = nil

  desc "start", "Starts background services used during development"
  def start

    puts "------------------------------------------------------"
    puts " STARTING:"
    puts "   - css (watching for Sass changes) on:"
    puts "       - open.core"
    puts "       - harness"
    puts "------------------------------------------------------"

    Css.new.watch
  end


end
