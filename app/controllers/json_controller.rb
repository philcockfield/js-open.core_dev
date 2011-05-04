class JsonController < ApplicationController
  def index
    @title = "JSON"
    @stylesheets = "json/head/stylesheets"
    @scripts = "json/head/scripts"
  end
end
