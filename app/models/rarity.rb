class Rarity < ApplicationRecord
  validates :ssr, :sr, :r, :picup_ssr, :picup_sr, :picup_r, :price, presence: true
  belongs_to :user 
end
