class ItemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        items = Item.all
        render json: items, include: :reviews 
    end

    def create 
        item = Item.create(item_params)
        render json: item,status: created 
    end

    def show 
        item = find_item
        serialized_item = ActiveModelSerializers::SerializableResource.new(item).as_json
        serialized_reviews = item.reviews.map do |review|
          {
            comment: review.comment,
            rating: review.rating,
            customer: {
              first_name: review.customer.first_name,
              last_name: review.customer.last_name
            }
          }
        end
        render json: serialized_item.merge(reviews: serialized_reviews)
      end

    def update 
        item = find_item 
        item.update(item_params)
        render json: item 
    end

    def destroy 
        item = find_item 
        item.destroy 
        head :no_content 
    end


    private 

    def find_item 
        Item.find(params[:id])
    end

    def item_params
        params.permit(:name, :price, :image, :quantity, :category )
    end

    def render_not_found_response
        render json: { error: "Item not found" }, status: :not_found
    end
    

end 