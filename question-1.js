// Question 1: Value Detective?

function describeValue(value) {
    const type  = typeof value;

    if (value) {
        return ` ${type} | truthy `;
    } else {
        return ` ${type} | falsy `;
    }
}

console.log(describeValue("hello"));
// console.log(describeValue(""));
// console.log(describeValue(25));
// console.log(describeValue(0));
console.log(describeValue(true));
// console.log(describeValue(null));
// console.log(describeValue(undefined));
console.log(describeValue("0"));
// console.log(describeValue(NaN));