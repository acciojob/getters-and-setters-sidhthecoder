//complete this code
class Person {
	constructor(name,age){
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name;
	}
	set age(){
		this._age=age;
	}
}

class Student extends Person {
	super(name);
	study(name){
		console.log(name+"is studying");
	}
}

class Teacher extends Person {
	super(name);
	teach(name){
		console.log(name+"is teaching");
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
