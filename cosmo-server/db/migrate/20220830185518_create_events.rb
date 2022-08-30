class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.integer :stadium_id
      t.string :name
      t.string :description
      t.string :game
      t.integer :seats_required
      t.datetime :time_start
      t.datetime :time_end
      t.string :ticket_price

      t.timestamps
    end
  end
end
