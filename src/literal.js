function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + b.toString();
    }
}
console.warn(combine(10, 20, "as-number"));
console.warn(combine("anil", "sidhu", "as-string"));
