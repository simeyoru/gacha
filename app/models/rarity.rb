class Rarity < ApplicationRecord
  validates :ssr, presence: true
  validates :sr, presence: true
  validates :r, presence: true
  validates :picup, presence: true
  validates :price, presence: true
  belongs_to :user 
end
