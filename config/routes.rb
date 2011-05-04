CoreDev::Application.routes.draw do
  get "pages/home"

  match "js/paths.js", :to => "javascripts#paths"
  match "js/init.js", :to => "javascripts#init"

  match "harness", :to => "harness#index"
  match "harness/content/welcome", :to => "harness#welcome"
  match "json", :to => "json#index"

  root :to => "harness#index"
end
