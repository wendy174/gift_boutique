class ChangeSellerIdToIntegerInItems < ActiveRecord::Migration[7.0]
  def change
    change_column :items, :seller_id, 'integer USING CAST(seller_id AS integer)'
  end
end
