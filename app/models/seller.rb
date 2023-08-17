class Seller < ApplicationRecord
    has_secure_password

    has_many :items
end
