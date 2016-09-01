class RemoveImageUrlFromCars < ActiveRecord::Migration
  def change
    remove_column :cars, :image_url, :string
  end
end
