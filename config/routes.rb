CoreDev::Application.routes.draw do

  match "js/paths.js", :to => "javascripts#paths"
  match "js/init.js", :to => "javascripts#init"

  root :to => "pages#home"
end
