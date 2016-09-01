json.extract! car, :id, :lat, :lng, :manufacturer, :model, :year, :style, :color, :price, :description, :owner_id, :user, :reviews, :image
json.imageurl asset_path(car.image.url)
