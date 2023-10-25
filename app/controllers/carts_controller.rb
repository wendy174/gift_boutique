class CartsController < ApplicationController
  skip_before_action :authenticate, only: [:index, :show, :add_item, :remove_item]

 
    def index 
        carts = Cart.all
        render json: carts
    end

    def add_item # responds to post request, fetch current cart and item user wants to add 
        @cart = current_cart 
        @item = Item.find_by_id(params[:item_id])
        @cart.add_item(@item) # add_item from model to add item to cart 
        render json: @cart.as_json(include: { cart_items: { include: :item } }), status: :ok
    end

    def remove_item
      @cart = current_cart
      @item = Item.find_by_id(params[:item_id])
      
      if @item
        # Implement logic to remove the item from the cart
        @cart.remove_item(@item)  # Assuming you have this method on the Cart model
        
        render json: { cartItems: @cart.cart_items.as_json(include: :item) }, status: :ok

      else
        render json: { error: "Item not found" }, status: :not_found
      end
    end



      private

      def record_not_found(exception)
        Rails.logger.error "RecordNotFound triggered from: #{exception.backtrace.first}"
        render json: { error: "Caught RecordNotFound exception" }, status: :not_found
     end
     
end
