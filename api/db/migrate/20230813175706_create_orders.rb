class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.integer :customer_id
      t.float :total_price
      t.string :status

      t.timestamps
    end
  end
end
