class JavascriptsController < ApplicationController
  def paths
    use_local = Rails.env.development?
    js = JavascriptPaths.new(use_local, params[:version])

    # Save a copy to paths.js (for use by Jasmine test-runner).
    if Rails.env.development?
      js.save("paths_local.js")
    end

    # Render the js.
    render :inline => js.to_s,
           :content_type => "text/javascript"
  end

  
  def init
    js = JavascriptInit.new(params[:version])

    # Save a copy to paths.js (for use by Jasmine test-runner).
    if Rails.env.development?
      js.save()
    end

    # Render the js.
    render :inline => js.to_s,
           :content_type => "text/javascript"
  end
end
