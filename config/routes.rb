Rails.application.routes.draw do
  resources :order_items
  resources :orders
  resources :cart_items
  resources :carts do
    member do
      post 'add_item'
      post 'remove_item'
    end
  end
  resources :reviews
  resources :customers 
  resources :sellers
  resources :items
  get '/hello', to: 'application#hello_world'
end
