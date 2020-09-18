class AddPriceToRarities < ActiveRecord::Migration[6.0]
  def change
    add_column :rarities, :price, :integer
  end
end
