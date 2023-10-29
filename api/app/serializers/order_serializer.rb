class OrderSerializer < ActiveModel::Serializer
  attributes :id, :customer_id, :total_price, :status
end
