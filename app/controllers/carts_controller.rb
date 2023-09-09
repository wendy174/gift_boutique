class CartsController < ApplicationController
    def index 
        carts = Cart.all
        render json: carts
    end

    def add_item
        @cart = current_cart 
        @item = Item.find(params[:item_id])
        @cart.add_item(@item)
        
        render json: @cart, status: :ok 
      end
      
    
    
end
