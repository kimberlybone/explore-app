class User < ApplicationRecord
  has_many :favorites, dependent: :destroy
  has_many :cities, through: :favorites
end
