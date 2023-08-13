class CreateOrderItems < ActiveRecord::Migration[7.0]
  def change
    create_table :order_items do |t|
      t.integer :item_id
      t.integer :order_id
      t.float :price

      t.timestamps
    end
  end
end
