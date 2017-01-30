class CreateDashboards < ActiveRecord::Migration
  def change
    create_table :dashboards do |t|
      t.boolean :fucked
      t.integer :last_fucked
      t.string :goals
      t.timestamps null: false
    end
  end
end
