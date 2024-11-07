export function processData(data, callback) {
    const processedData = data.map(item => item.toUpperCase());
    callback(processedData);
} 

// explain the above function
// what is the purpose of the function? it takes in an array of strings and a callback function as arguments
// what does the function do? it maps over the array of strings and converts each string to uppercase
// what does the function return? it returns the result of the callback function
// what are the arguments? data, callback 
// what are the parameters? item
// what is the return type? void
