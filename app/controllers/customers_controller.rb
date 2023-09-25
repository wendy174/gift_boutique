class CustomersController < ApplicationController

    def authenticate
      token = request.headers['Authorization']
      payload = FirebaseIdToken::Certificates.request
      decoded_token = FirebaseIdToken::Signature.verify(token)
      if decoded_token
        @current_customer = Customer.find_by(firebase_uid: decoded_token['sub'])
      else
        render json: { error: 'Authentication failed' }, status: :unauthorized
      end
    end
  

    # def create_or_find
    #     puts "Debug: Params #{params.inspect}"
      
    #     firebase_uid = params[:firebase_uid]
    #     email = params[:email]
    #     first_name = params[:first_name]
    #     last_name = params[:last_name]
    #     profile_pic = params[:profile_pic]
      
    #     customer = Customer.find_by(firebase_uid: firebase_uid)
      
    #     if customer
    #       puts "Debug: Found customer #{customer.inspect}"
    #       customer.update(
    #         email: email,
    #         first_name: first_name,
    #         last_name: last_name,
    #         profile_pic: profile_pic
    #       )
    #     else
    #       puts "Debug: Creating a new customer"
    #       customer = Customer.create(
    #         firebase_uid: firebase_uid,
    #         email: email,
    #         first_name: first_name,
    #         last_name: last_name,
    #         profile_pic: profile_pic
    #       )
    #     end
      
    #     render json: { customer: customer }
    #   end
      
    
    def index 
        customers = Customer.all 
        render json: customers
    end

    # def show 
    #     customer = Customer.find(params[:id])
    #     render json: customer
    # end

    def show
      # Assuming firebase_uid is used to find the customer
      customer = Customer.find_by(firebase_uid: params[:id])
      if customer
        render json: customer
      else
        render json: { error: 'Customer not found' }, status: :not_found
      end
    end

    def create # signup 
        customer = Customer.create!(customer_params)
        session[:customer_id] = customer.id
        render json: customer, status: :created 
    end

    # def show 
    #     render json: @current_customer
    # end

    private

   def customer_params 
        params.permit(:first_name, :last_name, :email, :profile_pic, :firebase_uid) 
   end
end
