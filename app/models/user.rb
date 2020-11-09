class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

         validates :name, presence: true, uniqueness: true,length: {maximum: 8}

  has_many :rarities
end
