function add(a, b) {
    return a + b;  // Ambiguous return values
}

const result_number = add(2, 5);  // Adds two numbers
console.log(result_number);

const result_string = add("2", "5");  // Concatenates two characters
console.log(result_string);