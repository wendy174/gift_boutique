class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :quantity, :category, :seller_id, :average_rating
  has_many :reviews
end
