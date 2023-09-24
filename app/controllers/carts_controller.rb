class CartsController < ApplicationController
    def index 
        carts = Cart.all
        render json: carts
    end

    def add_item # responds to post request, fetch current cart and item user wants to add 
        @cart = current_cart 
        @item = Item.find(params[:item_id])
        @cart.add_item(@item) # add_item from model to add item to cart 
        render json: @cart, status: :ok 
      end
      
end
