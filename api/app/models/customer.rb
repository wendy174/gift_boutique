class Customer < ApplicationRecord
    has_many :reviews
    has_one :cart
    has_many :orders
    has_many :order_items, through: :orders
end
