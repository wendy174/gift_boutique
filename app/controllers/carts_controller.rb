class CartsController < ApplicationController
  # before_action :current_cart


 
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

      private

      def record_not_found(exception)
        Rails.logger.error "RecordNotFound triggered from: #{exception.backtrace.first}"
        render json: { error: "Caught RecordNotFound exception" }, status: :not_found
     end
     
end
