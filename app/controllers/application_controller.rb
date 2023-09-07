class ApplicationController < ActionController::API
    include ActionController::Cookies
    
    def current_cart
        Cart.find(session[:cart_id])
      rescue ActiveRecord::RecordNotFound
        cart = Cart.create(customer_id: current_customer.id) # Assume you have a current_customer method
        session[:cart_id] = cart.id
        cart
      end
end
