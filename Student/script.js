class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}
class Student extends User {
	constructor(name, surname, year) {
		super(name, surname);
		this.year = year;
	}

	getCourse() {
		let my_date = new Date();
		let curr_year = my_date.getFullYear();	
		return (curr_year-this.year);
	}
}
var student = new Student('Иван', 'Иванов', 2017);

console.log(student.name); 
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);