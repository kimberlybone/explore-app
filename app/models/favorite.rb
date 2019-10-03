class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :city

  def city_name
    self.city.name
  end
end
