
r = Random.new 
50.times do |n|
	title = "todo#{n}"
	completed = [false, true][r.rand(2)]
	Todo.create!(title: title, completed: completed)
end
