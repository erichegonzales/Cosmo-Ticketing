class CreateBoughtTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :bought_tickets do |t|
      t.integer :user_id
      t.string :banner
      t.string :name
      t.string :game
      t.string :ticket_price
      t.datetime :time_start
      t.datetime :time_end

      t.timestamps
    end
  end
end
