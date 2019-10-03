class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :current_city
  has_many :favorites
  # has_many :cities, through: :favorites
end
