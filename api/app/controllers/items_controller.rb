class ItemsController < ApplicationController
    skip_before_action :authenticate, only: [:index, :show, :destroy, :create]

    def index 
        items = Item.all
        render json: items, include: :reviews 
    end

    def create 
        item = Item.create(item_params)
        render json: item, status: :created 
    end

    def show 
        item = find_item
        render json: item, include: ['review', 'reviews.customer']
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
        params.require(:item).permit(:name, :price, :quantity, :category, :seller_id, image: [])

    end

    

end 