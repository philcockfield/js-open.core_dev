class PagesController < ApplicationController
  def home
  end

  def init_javascript
    render :inline => JavascriptInit.new().to_s, :content_type => "text/javascript"
  end
end
