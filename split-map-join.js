// The task requires writing a function to transform strings with hyphen into camelCase 

function camelize(string) {
    return string
        .split("-")
        .map((item, index) => {
            if (index === 0) {
                return item;
            } else {
                return item[0].toUpperCase() + item.slice(1);
            }
        })
        .join("");
}

// TEST CASES


console.log(camelize("my-example-string")); // myExampleString
console.log(camelize("background-color"));  // backgroundColor
console.log(camelize("some-hyphen-text"));  // someHyphenText
console.log(camelize("very-cold-night"));   // veryColdNight