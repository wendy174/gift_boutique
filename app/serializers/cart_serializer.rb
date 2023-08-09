class CartSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :total_price
end
