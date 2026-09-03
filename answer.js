// Question 1: Value Detective?

function describeValue(value) {
    const type  = typeof value;

    if (value) {
        return ` ${type} | truthy `;
    } else {
        return ` ${type} | falsy `;
    }
}

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

// Question 3: Username Gatekeeper 

function validateUsername (username) {
    if (username.length < 4) {
        return " Too Short " ;
    }
    if (username.includes(" ")) {
        return " No Space Allowed " ;
    }
    if (username.toLowerCase().includes("admin")) {
        return " Reserved Word ";
    }
    return " Available " ;
}
