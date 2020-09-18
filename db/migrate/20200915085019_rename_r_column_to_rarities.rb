class RenameRColumnToRarities < ActiveRecord::Migration[6.0]
  def change
    rename_column :rarities, :R, :r
  end
end
