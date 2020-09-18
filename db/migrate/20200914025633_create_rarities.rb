class CreateRarities < ActiveRecord::Migration[6.0]
  def change
    create_table :rarities do |t|
      t.references :user, foreign_key: true
      t.integer :SSR
      t.integer :SR
      t.integer :R
      t.float :picup
      t.integer :money
      t.integer :price
      t.timestamps
    end
  end
end
