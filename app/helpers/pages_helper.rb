module PagesHelper

  def application_js
    single_js_file? ? 'application-single.js' : 'application.js'
  end

  def single_js_file?
    return true if params[:mode] == 'single'
    return false if params[:mode] == 'debug'
    return true if Rails.env.production?
    false
  end

end
