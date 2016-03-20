class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.integer :country_id, null:false
      t.integer :friend_id, null:false
      t.float :score, null:false

      t.timestamps null: false
    end
  end
end
