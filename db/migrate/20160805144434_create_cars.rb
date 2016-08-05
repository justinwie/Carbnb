class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.float :lat, null: false
      t.float :lng, null: false

      t.string :manufacturer, null: false
      t.string :model, null: false
      t.integer :year, null: false
      t.string :style, null: false
      t.string :color, null: false
      t.integer :price, null: false
      t.text :description, null: false
      t.string :image_url

      t.integer :owner_id, null: false

      t.timestamps null: false
    end
    add_index :cars, :owner_id
  end
end
