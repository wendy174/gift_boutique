class ChangeImageToBeTextInItems < ActiveRecord::Migration[7.0]
    def up
      change_column :items, :image, :text
    end
  
    def down
      change_column :items, :image, :string
    end
end
