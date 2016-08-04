class NullsforFLname < ActiveRecord::Migration
  def change
    change_column_null :users, :fname, false
  end
end
