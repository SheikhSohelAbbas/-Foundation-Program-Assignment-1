// Question 1: Value Detective?

function describeValue(value) {
    const type  = typeof value;

    if (value) {
        return ` ${type} | truthy `;
    } else {
        return ` ${type} | falsy `;
    }
}

