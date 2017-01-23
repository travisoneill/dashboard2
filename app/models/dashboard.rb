class Dashboard < ActiveRecord::Base
  def change
    create_table :products do |t|
      t.string :fucked
      t.time :last_fucked
      t.timestamps
    end
  end
end
