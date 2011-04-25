class HarnessController < ApplicationController
  layout "test_harness"

  def index
  end

  def welcome
    render :layout => false
  end

end
