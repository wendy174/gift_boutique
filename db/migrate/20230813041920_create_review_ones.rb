class CreateReviewOnes < ActiveRecord::Migration[7.0]
  def change
    create_table :review_ones do |t|
      t.float :rating 
      t.string :comment 
      t.integer :item_id 
      t.integer :customer_one_id 
      t.timestamps
    end
  end
end