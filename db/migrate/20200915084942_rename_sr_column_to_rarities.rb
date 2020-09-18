class RenameSrColumnToRarities < ActiveRecord::Migration[6.0]
  def change
    rename_column :rarities, :SR, :sr
  end
end
