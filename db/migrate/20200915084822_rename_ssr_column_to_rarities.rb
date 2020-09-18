class RenameSsrColumnToRarities < ActiveRecord::Migration[6.0]
  def change
    rename_column :rarities, :SSR, :ssr
  end
end
