class Review < ActiveRecord::Base
  validates :rating, :user_id, :car_id, :description, presence: true

  belongs_to :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :car,
    class_name: 'Car',
    primary_key: :id,
    foreign_key: :car_id

end
