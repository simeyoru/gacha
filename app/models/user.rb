class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

        validates :name, presence: true, uniqueness: { case_sensitive: true }, length: {maximum: 8}

  has_many :rarities
end
