class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name 
      t.float :price 
      t.string :image 
      t.integer :quantity
      t.string :category 
      t.integer :seller_id 
      t.timestamps
    end
  end
end
