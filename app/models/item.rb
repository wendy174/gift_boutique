class Item < ApplicationRecord
    belongs_to :seller
    has_many :reviews
    has_many :cart_items
    has_many :carts, through: :cart_items
    has_many :order_items
    has_many :orders, through: :order_items
end
