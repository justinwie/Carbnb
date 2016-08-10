class Booking < ActiveRecord::Base
  validates :start_date, :end_date, :car_id, :renter_id, presence: true

  belongs_to :renter,
    primary_key: :id,
    foreign_key: :renter_id,
    class_name: 'user'

  belongs_to :car
    primary_key: :id,
    foreign_key: :car_id,
    class_name: 'car'


end
