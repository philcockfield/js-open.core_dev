CoreDev::Application.routes.draw do
  get "pages/home"
  get "javascripts/boot", :to => "pages#javascript_boot"

  root :to => "pages#home"
end
