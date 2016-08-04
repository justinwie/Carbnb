class NullsforLname < ActiveRecord::Migration
  def change
    change_column_null :users, :lname, false
  end
end
