class Car < ActiveRecord::Base
  validates :lat, :lng, :manufacturer, :model, :year, :style, :color, :price, :description, :owner_id, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: 'User'




end
