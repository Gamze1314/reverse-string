// Solution: (Python)
// find the length of string.
// initialize reversed_string variable (new string)
// if len = 0 , return ''
// if len = 1 . return str
// if len > 1 , iterate thru string
// swap the characters indexes.
// len - index = new position for the char.
// return reversed_string

function reverseString(str) {
  const len = str.length;
  let reversedString = "";

  if (len === 0) {
    return "";
  } else if (len === 1) {
    return str;
  } else {
    for (let i = 0; i < len; i++) {
      reversedString += str[len - 1 - i];
    }
    return reversedString;
  }
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// string => empty, single character,or multiple characters.
// strings are itrable
// methods: slicing, reversing, joining..

// function takes str as a parameter
// check if str is empty => return empty string.

// check if str is a single character => return str

// check if str is a multiple character =>
// iterate thru the string
// swap the characters
// return reversed string
