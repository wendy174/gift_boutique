class CreateSellers < ActiveRecord::Migration[7.0]
  def change
    create_table :sellers do |t|
      t.string :company_name 
      t.string :email
      t.string :password_digest
      t.string :profile_pic 
      t.timestamps
    end
  end
end
