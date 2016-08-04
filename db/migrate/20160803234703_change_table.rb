class ChangeTable < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :fname
      t.string :lname
      t.remove :name, :username
    end
  end
end
