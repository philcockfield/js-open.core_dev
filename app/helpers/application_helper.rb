module ApplicationHelper

  def application_js
    path = single_js_file? ? 'application-single.js' : 'application.js'
    "#{server_url}/javascripts/#{path}"
  end

  def single_js_file?
    return true if params[:mode] == 'single'
    return false if params[:mode] == 'debug'
    return true if Rails.env.production?
    false
  end

  def js_tag(path)
    javascript_include_tag "#{server_url}/javascripts/#{path}"
  end

  def server_url
    "http://#{request.domain}:#{request.port}"
  end
  
end
