class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :city_name
  # belongs_to :user
  # belongs_to :city
end
