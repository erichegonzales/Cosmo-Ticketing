class CreateStadia < ActiveRecord::Migration[7.0]
  def change
    create_table :stadia do |t|
      t.string :name
      t.string :address
      t.integer :no_seats

      t.timestamps
    end
  end
end
