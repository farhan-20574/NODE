const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John
console.log(jsonObject.age);  // Output: 30
console.log(jsonObject.city); // Output: New York