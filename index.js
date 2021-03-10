// Task 0.1

var x = 0
var y = 1
console.log(x)
console.log(y)

var x = x + 3
var y = y + x
console.log(x)
console.log(y)


// Task 0.2

var x = 1 + 1 * 2
var y = (1 + 1) * 2
var z = 1 + ( 1 * 2 )
var a = 1 + 1 * 2 / 2
var b = (1 + 1 * 2 ) /  2

console.log(x)
console.log(y)
console.log(z)
console.log(a)
console.log(b)


// Task 0.3

  function hello(str) {
      console.log(str);
  }

 hello("Hello");


// Task 0.4

function evenOrOdd(integer) {
    if (integer % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

evenOrOdd(3);



// Task 0.5

function calcArea(side1,side2,side3) {
    var perimeter = (side1 + side2 + side3) / 2;
    console.log(Math.sqrt(perimeter*((perimeter - side1)* (perimeter - side2)* (perimeter - side3))));
}

calcArea(10,10,10);


// Task 0.6

function maximumNumber(x,y,z) {
    let max = 0;
    if (x > y) {
        max = x > y ? x : z;
    } else {
        max = y > z ? y : z;
    }
    return max;
}

console.log(maximumNumber(300,400,700));


// Task 0.7

function convertToFahrenheit(Celcius) {
    let fahrenheit = (Celcius * 9/5) + 32;
    return fahrenheit;
}

console.log(convertToFahrenheit(200))

function convertToCelcius(Fahrenheit) {
    let celcius = (Fahrenheit - 32) * 5/9;
    return celcius;
}

console.log(convertToCelcius(392));

//  Task 0.8

function convertTime(num) {
    let hrs = Math.floor(num / 60);
    let min = num % 60;
    //let time;
    if (hrs === 1 && min === 1) {
        time = `${hrs} hour, ${min} minute`;
    } else if (hrs !== 1 && min === 1) {
        time = `${hrs} hours, ${min} minute`;
    } else if (hrs === 1 && min !== 1) {
        time = `${hrs} hour, ${min} minutes`
    } else {
        time = `${hrs} hours, ${min} minutes`;
    }
    return time;
}

console.log(convertTime(121));


// Task 0.9

function checkVowels(str) { 
    let vowels = str.match(/[aeiou]/gi);   

return vowels;
}

console.log(checkVowels('Umuzi is the best thing ever'));



// Task 0.10

const findCommonCharacters = (word1,word2) => {
    var result = [];
    var newObj = {};
    var character = word1[0];
    for (let word of word1) {
      newObj[word] = {};
      for (let letter of word) {
        if (newObj[word][letter]) {
          newObj[word][letter] += 1;
        } else {
          newObj[word][letter] = 1;
        }
      }
    }
    for (let letter of character) {
      let count = 1;
      for (let word in newObj) {
        if (word != character) {
          if (newObj[word][letter] > 0) {
            newObj[word][letter] -= 1;
            count += 1;
          }
          if (count === word1.length) {
            result.push(letter);
          } 
        }
      }
    }
    return result;
  };
  
  console.log(findCommonCharacters(['mlamuli&','andile&']));

  