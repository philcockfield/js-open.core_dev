require 'spec_helper'

describe JavascriptsController do

  describe "GET 'paths'" do
    it "should be successful" do
      get 'paths'
      response.should be_success
    end
  end

end
