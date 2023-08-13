class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :profile_pic, :password_digest
end
