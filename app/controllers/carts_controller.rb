class CartsController < ApplicationController
    def index 
        carts = Cart.all
        render json: carts
    end
    
    def add_item
        @cart = current_cart # Assume you have a method that retrieves the current cart
        @item = Item.find(params[:item_id])
        @cart.add_item(@item)
        
        redirect_to cart_path(@cart)
    end
end
