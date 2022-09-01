class CreateTicketBoughts < ActiveRecord::Migration[7.0]
  def change
    create_table :ticket_boughts do |t|
      t.integer :user_id
      t.string :name
      t.string :game
      t.string :ticket_price
      t.datetime :time_start
      t.datetime :time_end
      t.string :banner

      t.timestamps
    end
  end
end
