# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
data = HashWithIndifferentAccess.new(YAML::load_file(File.join(Rails.root, 'db', 'seeds', 'seeds.yml')))

data[:projects].each do |project|
	p = Project.new(title: project[:title])
	project[:todos].each do |todo|
		p.todos << Todo.create(todo)
	end
	p.save!
end
