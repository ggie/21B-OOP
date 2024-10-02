class Person {
    #name; 
    #age;  
    #occupation; 

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    getOccupation() {
        return this.#occupation;
    }
}

class Student extends Person {
    constructor(name, age, occupation, major) {
        super(name, age, occupation);
        this.major = major;
    }

    getMajor() {
        return this.major;
    }
}

const student = new Student('March', 24, 'Instructor', 'Programming');

const studentInfoDiv = document.getElementById('student-info');
studentInfoDiv.innerHTML = `
    <p>Name: ${student.getName()}</p>
    <p>Age: ${student.getAge()}</p>
    <p>Occupation: ${student.getOccupation()}</p>
    <p>Major: ${student.getMajor()}</p>
`;

console.log(`Name: ${student.getName()}`);
console.log(`Age: ${student.getAge()}`);
console.log(`Occupation: ${student.getOccupation()}`);
console.log(`Major: ${student.getMajor()}`);
