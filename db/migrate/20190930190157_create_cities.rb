class CreateCities < ActiveRecord::Migration[6.0]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :image_url
      t.string :description
      t.integer :favorites_count

      t.timestamps
    end
  end
end
