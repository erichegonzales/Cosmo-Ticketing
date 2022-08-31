class CreateImages < ActiveRecord::Migration[7.0]
  def change
    create_table :images do |t|
      t.integer :event_id
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
