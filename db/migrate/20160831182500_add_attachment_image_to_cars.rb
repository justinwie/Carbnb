class AddAttachmentImageToCars < ActiveRecord::Migration
  def self.up
    change_table :cars do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :cars, :image
  end
end
