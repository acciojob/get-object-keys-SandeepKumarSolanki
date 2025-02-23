//your JS code here. If required.

const student1 = {
	name : "John",
	age : 21,
	city : "Noida"
}

const student2 = {
	name : "Amit"
}
function findKeys(obj) {
	return Object.keys(obj);
}

let keys1 = [...findKeys(student1)]
let keys2 = [...findKeys(student2)]
console.log(keys1);
console.log(keys2);



