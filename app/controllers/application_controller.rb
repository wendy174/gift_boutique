class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    # before_action :authenticate

    # authen by verifying firebase token sent from client side 
    def authenticate
      token = request.headers['Authorization']
      payload = FirebaseIdToken::Certificates.request
      decoded_token = FirebaseIdToken::Signature.verify(token)
      puts "Received Token: #{token}"
      if decoded_token
        @current_customer = Customer.find_by(firebase_uid: decoded_token['sub'])
        unless @current_customer
          render json: { error: 'User not found' }, status: :not_found
        end
      else
        render json: { error: 'Authentication failed' }, status: :unauthorized
      end
    end

  
    
  #   def current_cart
  #     Cart.find(session[:cart_id])
  #     cart = Cart.create!(customer_id: @current_customer.id)
  #     session[:cart_id] = cart.id
  #     cart
  # end

  def current_cart
    if session[:cart_id]
      Cart.find(session[:cart_id])
    else
      cart = Cart.create!(customer_id: @current_customer.id)
      session[:cart_id] = cart.id
      cart
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Cart not found with id: #{session[:cart_id]}" }, status: :not_found
  end

  

    def render_not_found_response
      render json: { error: "Record not found" }, status: :not_found
    end
    
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end 

end
