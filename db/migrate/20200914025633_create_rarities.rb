class CreateRarities < ActiveRecord::Migration[6.0]
  def change
    create_table :rarities do |t|
      t.references :user, foreign_key: true
      t.integer :ssr
      t.integer :sr
      t.integer :r
      t.float :picup_ssr
      t.float :picup_sr
      t.float :picup_r
      t.integer :money
      t.integer :price
      t.timestamps
    end
  end
end
