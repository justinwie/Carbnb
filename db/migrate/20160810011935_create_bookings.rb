class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.integer :renter_id, null: false
      t.integer :car_id, null: false

      t.datetime :start_date, null: false
      t.datetime :end_date, null: false

      t.timestamps null: false
    end
    add_index :bookings, :renter_id
    add_index :bookings, :car_id
  end
end
