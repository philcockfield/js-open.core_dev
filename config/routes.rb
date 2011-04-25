CoreDev::Application.routes.draw do

  match "js/paths.js", :to => "javascripts#paths"
  match "js/init.js", :to => "javascripts#init"

  match "harness", :to => "harness#index"
  match "harness/welcome", :to => "harness#welcome"

  root :to => "pages#home"
end
