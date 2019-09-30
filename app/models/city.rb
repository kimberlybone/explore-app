class City < ApplicationRecord
  has_many :favorites
  has_many :users, through: :users
end
