Rails.application.routes.draw do
  resources :customer_ones
  resources :sellers
  resources :items
  get '/hello', to: 'application#hello_world'
end
