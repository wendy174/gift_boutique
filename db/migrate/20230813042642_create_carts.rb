class CreateCarts < ActiveRecord::Migration[7.0]
  def change
    create_table :carts do |t|
      t.integer :customer_one_id
      t.float :total_price
      t.timestamps
    end
  end
end
