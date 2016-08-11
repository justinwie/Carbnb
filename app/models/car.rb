class Car < ActiveRecord::Base
  validates :lat, :lng, :manufacturer, :model, :year, :style, :color, :price, :description, :owner_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'

  has_many :bookings,
    primary_key: :id,
    foreign_key: :car_id,
    class_name: 'Booking'

  has_many :reviews,
    primary_key: :id,
    foreign_key: :car_id,
    class_name: 'Review'


  def self.in_bounds(bounds)
    min_lat = bounds['southWest']['lat'].to_f
    max_lat = bounds['northEast']['lat'].to_f
    min_lng = bounds['southWest']['lng'].to_f
    max_lng = bounds['northEast']['lng'].to_f

    self.where("lat < ?", max_lat)
        .where("lat > ?", min_lat)
        .where("lng > ?", min_lng)
        .where("lng < ?", max_lng)
  end


end
