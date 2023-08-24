class Item < ApplicationRecord
    belongs_to :seller
    has_many :reviews, dependent: :destroy
    has_many :cart_items
    has_many :carts, through: :cart_items
    has_many :order_items
    has_many :orders, through: :order_items

    def average_rating ## round to nearest whole number 
        reviews.average(:rating).to_f.round
    end
end
