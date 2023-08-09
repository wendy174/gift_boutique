Rails.application.routes.draw do
  resources :sellers
  resources :items
  get '/hello', to: 'application#hello_world'
end
