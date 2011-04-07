class PagesController < ApplicationController
  def home
  end

  def javascript_boot
    render :inline => JavascriptBoot.new().to_s, :content_type => "text/javascript"
  end

end
