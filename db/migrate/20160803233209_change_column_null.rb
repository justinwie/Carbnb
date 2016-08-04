class ChangeColumnNull < ActiveRecord::Migration
  def change
    change_column_null(:users, :profile_img_url, true)
  end
end
