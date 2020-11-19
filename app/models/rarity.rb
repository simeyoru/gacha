class Rarity < ApplicationRecord
  validates :ssr, :sr, :r, :picup_ssr, :picup_sr, :picup_r, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 99999 },presence: true
  belongs_to :user , optional: true
end
