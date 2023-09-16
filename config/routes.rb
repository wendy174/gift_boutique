Rails.application.routes.draw do
  resources :order_items
  resources :orders
  resources :cart_items
  resources :carts do
    member do
      post 'add_item'
    end
  end
  resources :reviews
  resources :customers do
    collection do
      post 'create_or_find'
    end
  end
  resources :sellers
  resources :items
  get '/hello', to: 'application#hello_world'
end
