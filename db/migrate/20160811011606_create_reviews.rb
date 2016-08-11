class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :car_id, null: false

      t.text :description, null: false
      t.integer :rating, null: false

      t.timestamps null: false

    end
    add_index :reviews, :user_id
    add_index :reviews, :car_id

  end
end
