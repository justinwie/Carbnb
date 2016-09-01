json.array!(@cars) do |car|
  json.partial! "api/cars/car", car: car
end
