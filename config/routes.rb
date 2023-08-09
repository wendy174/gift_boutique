Rails.application.routes.draw do
  resources :reviews
  resources :customers
  resources :sellers
  resources :items
  get '/hello', to: 'application#hello_world'
end
