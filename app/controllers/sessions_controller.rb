# class SessionsController < ApplicationController
#     skip_before_action :authorize, only: [:create]
  
#     def create
#           customer = Customer.find_by(email: params[:email])
#           if customer&.authenticate(params[:password])
#             session[:customer] = customer.id
#             render json: customer, status: :ok
#           else
#             render json: { error: "Invalid email or password"}, status: :unprocessable_entity
#           end
#     end
  
  
#       def destroy # will clear username out of session 
#           session.delete :customer_id
#           head :no_content
#       end
# end