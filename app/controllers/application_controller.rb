class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # before_action :authorize 

  
    
    def current_cart
      Cart.find(session[:cart_id])
      cart = Cart.create!(customer_id: @current_customer.id)
      session[:cart_id] = cart.id
      cart
  end


    def render_not_found_response
      render json: { error: "Record not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end 

end
