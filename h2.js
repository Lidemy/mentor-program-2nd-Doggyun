function capitalize(str) {
    re = new RegExp(/^[a-z]/);
    if (re.test(str)) {
        return str.replace(/( |^)[a-z]/g, str[0].toUpperCase());
    } else {
        return str;
    }
}

console.log(capitalize("nick"));