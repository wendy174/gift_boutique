class SellerSerializer < ActiveModel::Serializer
  attributes :id, :company_name, :email, :password_digest, :profile_pic
end
