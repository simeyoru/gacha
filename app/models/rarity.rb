class Rarity < ApplicationRecord
  validates :ssr, :sr, :r, :picup_ssr, :picup_sr, :picup_r, :price, presence: true,
  numericality: { greater_than_or_equal_to: 0.1}
  belongs_to :user , optional: true
end
