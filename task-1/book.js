function isBookApplicable(searchString) {
const GetBookTitle ="The Fundamentals of JavaScript";

    return GetBookTitle.toLowerCase().includes(searchString.trim().toLowerCase());

}

console.log(isBookApplicable("javascript"));
// Output: true

console.log(isBookApplicable("javascript "));
// Output: true

console.log(isBookApplicable("python"));
// Output: false

console.log(isBookApplicable("JavaScript"));
// Output: true

console.log(isBookApplicable("JAVASCRIPT"));
// Output: true
