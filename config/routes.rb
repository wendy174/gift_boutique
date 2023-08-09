Rails.application.routes.draw do

  resources :order_items
  resources :orders
  resources :cart_items
  resources :carts
  resources :reviews
  resources :customers
  resources :sellers
  resources :items
  get '/hello', to: 'application#hello_world'
end
