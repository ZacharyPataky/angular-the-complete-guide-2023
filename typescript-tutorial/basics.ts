// Primitives: number, string, boolean
// More Complex Types: arrays, objects
// Function types, parameters, etc.

//-----------------------------------------------------------------------------//

//--| Primitives |-------------------------------------------------------------//

let age: number;
age = 12;
// age = "asdf" -> Results in a type conflict (number vs string)

let user_name: string;
user_name = "Automata-Man"
// user_name = 123 -> Results in a type conflict (string vs number)

let isInstructor: boolean;
isInstructor = true;
// isInstructor = "..." -> Results in a type conflict (boolean vs string)

//--| More Complex Types |-----------------------------------------------------//

let hobbies: string[];
hobbies = ["thing_1", "thing_2"];
// hobbies = [ 1, 2, 3 ] -> Results in a type conflict (string array vs number array)

let person: {
    name: string,
    age: number
};

person = {
    name: "Zachary",
    age: 22
};

// person = {
//     isEmployee: true
// };  -> Results in a type conflict (mismatched fields)

//--| Type Inference |---------------------------------------------------------//

// It doesn't matter if we don't assign a type to a new variable.
// TypeScript will infer a variable's type with the initial value.

let course = "Angular - The Complete Guide";
// course = 12345; -> Doesn't work since [course] is inferred to be a string

//--| Union Types |------------------------------------------------------------//

let union: string | number;
union = "This is a string!";
union = 12345;
// union = true; -> Results in a type conflict (string || number vs boolean)

//--| Type Alias |-------------------------------------------------------------//

type Dog = {
    name: string,
    age: number
};

let django: Dog = {
    name: "Django",
    age: 7
};

//--| Functions and Types |----------------------------------------------------//

function add(a: number, b: number): number {
    return a + b;
};

function output(value: any): void {
    console.log(value);
};

//-- | Generics |--------------------------------------------------------------//

function insert_at_beginning<T>(array: T[], value: T) {
    const new_array = [value, ...array]  // Prepend value to an existing array
    return new_array;
};

const demo_array = [1, 2, 3];
const updated_array = insert_at_beginning(demo_array, 0);  // [ 0, 1, 2, 3 ]
const string_array = insert_at_beginning(["b", "c", "d"], "a")  // [ "a", "b", "c", "d" ]

//--| Classes |----------------------------------------------------------------//

class Student {
    private first_name: string;
    private last_name: string;
    private age: number;
    private course_list: string[];

    constructor(first_name: string, last_name: string, age: number, course_list: string[]) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.course_list = course_list;
    }

    public enroll(course_name: string): void {
        this.course_list.push(course_name);
    }

    public list_courses(): string[] {
        return this.course_list.slice();
    }
}

const student = new Student("Zachary", "Pataky", 22, ["Angular"]);
student.enroll("React");  // student.course_list => Angular, React
// student.list_courses();  => Angular, React

//--| Interfaces |-------------------------------------------------------------//

interface Human {
    first_name: string;
    age: number;

    greet: () => void;
}

let zachary: Human;
zachary = {
    first_name: "Zachary",
    age: 22,

    greet() {
        console.log("Greetin's, creetin's!")
    }
};

// Required to possess characteristics of the implemented interface
class Instructor implements Human {
    first_name: string;
    age: number;

    greet() {
        console.log("Hello!");
    }
}