module PagesHelper

  def application_js
    single_js_file? ? 'application-single.js' : 'application.js'
  end

  def single_js_file?
    params[:mode] == 'single' || Rails.env.production?
  end

end
