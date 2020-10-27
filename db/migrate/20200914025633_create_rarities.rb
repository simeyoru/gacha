class CreateRarities < ActiveRecord::Migration[6.0]
  def change
    create_table :rarities do |t|
      t.references :user, foreign_key: true, null:false
      t.float :ssr, null:false
      t.float :sr, null:false
      t.float :r, null:false
      t.float :picup_ssr, null:false
      t.float :picup_sr, null:false
      t.float :picup_r, null:false
      t.integer :price, null:false
      t.timestamps
    end
  end
end
