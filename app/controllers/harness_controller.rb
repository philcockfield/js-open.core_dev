class HarnessController < ApplicationController

  def index
    @title = "Test Harness"
    @stylesheets = "harness/head/stylesheets"
    @scripts = "harness/head/scripts"
  end

  def welcome
    render :layout => false
  end

end
