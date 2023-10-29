class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :comment, :item_id, :customer_id
  belongs_to :customer
end
