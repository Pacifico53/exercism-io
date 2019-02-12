package twofer

func ShareWith(name string) string {
	init := "One for "
	end := ", one for me."
	if name == "" {
		name = "you"
	}
	

	
	return init + name + end
}
