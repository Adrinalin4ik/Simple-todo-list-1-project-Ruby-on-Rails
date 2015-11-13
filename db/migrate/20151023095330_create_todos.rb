class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :text
      t.boolean :isCompleted
      t.references :project, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
