class CartSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :total_price
  belongs_to :customer
  has_many :cart_items
end
