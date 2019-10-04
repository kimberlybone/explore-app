class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :favorites_count
  # has_many :favorites
  # has_many :users
  
end
