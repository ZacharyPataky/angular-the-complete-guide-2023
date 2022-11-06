function add_numbers(a: number, b: number) {
    return a + b;  // Only works with numberic types
}

const result_number = add_numbers(2, 5);  // Adds two numbers
console.log(result_number);

function add_strings(a: string, b: string) {
    return a + b;  // Only works with string types
}

const result_string = add_strings("2", "5");  // Concatenates two characters
console.log(result_string);

// Compiled with npx tsc .\with-typescript.ts