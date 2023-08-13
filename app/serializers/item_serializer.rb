class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :quantity, :category, :seller_id
end
