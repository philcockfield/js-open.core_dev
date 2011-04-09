CoreDev::Application.routes.draw do
  get "pages/home"
  get "javascripts/init", :to => "pages#init_javascript"

  root :to => "pages#home"
end
