// Question 2 : Bangladesh Weekend Machine 

function getDayType(day) {
    const dayName = day.toLowerCase();

     switch (dayName) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";

        default:
            return "Invalid Day";
    }
}

// Test
// console.log(getDayType("Friday"));
// console.log(getDayType("friday"));
// console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));