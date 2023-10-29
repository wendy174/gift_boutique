class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :profile_pic, :firebase_uid
end
