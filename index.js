const obj = {
    a: 1,
    b: 2,
    c: undefined,
    d: null,
}

function getFilteredObj(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([key, value]) => typeof value !== "undefined" && typeof value !== "object"));
}

console.log(getFilteredObj(obj));