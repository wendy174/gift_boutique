class ReviewsController < ApplicationController
        
    
        def index 
            reviews = Review.all
            render json: reviews, include: :items
        end
    
        def create 
            review = Review.create(review_params)
            render json: reivew, status: created 
        end
    
        def show 
            review = find_review 
            render json: review
        end
    
        def update 
            review = find_review 
            review.update(review_params)
            render json: review
        end
    
        def destroy 
            review = find_review
            review.destroy 
            head :no_content 
        end
    
    
        private 
    
        def find_review 
            Review.find(params[:id])
        end
    
        def review_params
            params.permit(:rating, :comment, :item_id, :customer_id )
        end
    
        
        
    

end
