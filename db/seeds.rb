# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
City.destroy_all
User.destroy_all
Favorite.destroy_all

kim = User.create(name: "Kimberly", current_city: "New York City")
john = User.create(name: "John", current_city: "Boston")

chicago = City.create(name: "Chicago", image_url: "https://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/1568915248/Chicago-Bib-Gourmand-FT-Blog0919.jpg?itok=BzVTsUjl", description: "The windy city.", favorites_count: 0)
dallas = City.create(name: "Dallas", image_url: "https://i.pinimg.com/originals/d7/ee/17/d7ee1747b4a9f9c1a7364a0d4671a945.jpg", description: "Largest Population in the US: 8.623 million", favorites_count: 0)
san_fran = City.create(name: "San Francisco", image_url: "https://amp.businessinsider.com/images/5c0a9a64965aa01b34490f00-750-563.jpg", description: "Largest Population in the US: 8.623 million", favorites_count: 0)
dc = City.create(name: "Washington DC", image_url: "https://www.amtrakvacations.com/content/uploads/2018/03/Washington-DC-cherry-blossoms-small.jpg", description: "Largest Population in the US: 8.623 million", favorites_count: 0)
miami = City.create(name: "Miami", image_url: "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/12/The-Breakwater-Hotel-in-Miami-Florida.jpg", description: "Largest Population in the US: 8.623 million", favorites_count: 0)
pheonix = City.create(name: "Pheonix", image_url: "https://i0.wp.com/getthefriendsyouwant.com/wp-content/uploads/2018/06/meet-people-in-scottsdale-and-make-friends.jpg", description: "Largest Population in the US: 8.623 million", favorites_count: 0)
nyc = City.create(name: "New York City", image_url: "https://www.worldatlas.com/upload/db/c9/85/640px-new-york-times-square-terabass.jpg", description: "Largest Population in the US: 8.623 million", favorites_count: 0)
boston = City.create(name: "Boston", image_url: "https://www.penguinandpia.com/wp-content/uploads/2019/08/things-to-do-in-boston-Faneuil-Hall-Marketplace-quincy-market.jpg", description: "Has the very first chocolate factory in the US.", favorites_count: 0)


Favorite.create(name: "1", user: kim, city: nyc)
Favorite.create(name: "2", user: john, city: boston)
