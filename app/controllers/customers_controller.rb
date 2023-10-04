class CustomersController < ApplicationController
  skip_before_action :authenticate, only: [:index, :show]

      
    
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
