class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :price, :item_id, :cart_id
end
