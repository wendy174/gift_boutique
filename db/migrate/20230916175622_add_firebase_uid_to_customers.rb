class AddFirebaseUidToCustomers < ActiveRecord::Migration[7.0]
  def change
    add_column :customers, :firebase_uid, :string
    add_index :customers, :firebase_uid, unique: true 
  end
end

## index speeds up data retrieval, unieueness constraint ensures no two records can have the same firebase_uid