class ChangeQuantityToBeIntegerInItems < ActiveRecord::Migration[7.0]
  def change
    change_column :items, :quantity, 'integer USING CAST(quantity AS integer)'

  end
end
