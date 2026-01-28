function parseDateString(dateString) {
const getDateSplit = dateString.split(" ")
const getDateFormat = getDateSplit[0]
const getDate = getDateSplit[1]
const getDateValues = getDate.split("-")

let day, month;
let year = Number(getDateValues[2]);

if (getDateFormat === "MDY") {
 month = Number(getDateValues[0])
 day = Number(getDateValues[1])
} else if (getDateFormat === "DMY") {
 day = Number(getDateValues[0])
 month = Number(getDateValues[1])
}
return { day, month, year };

}

//test cases:
console.log(parseDateString("MDY 10-21-1983"));
// Output: { day: 21, month: 10, year: 1983 }

console.log(parseDateString("DMY 21-10-1983"));
// Output: { day: 21, month: 10, year: 1983 }

console.log(parseDateString("MDY 03-15-2024"));
// Output: { day: 15, month: 3, year: 2024 }

console.log(parseDateString("DMY 15-03-2024"));
// Output: { day: 15, month: 3, year: 2024 }