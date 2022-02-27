const mucitler = [
  ["Albert Einstein", 1879],
  ["Isaac Newton", 1643],
  ["Galileo Galilei", 1564],
  ["Marie Curie"], // 1867
  ["Johannes Kepler", 1571],
  ["Nicolaus Kopernik", 1473],
  ["Max Planck", 1858],
  ["Katherine Blodgett"], // 1898
  ["Ada Lovelace", 1815],
  ["Sarah E. Goode", 1855],
  ["Lise Meitner", 1878],
  ["Hanna Hammarström", 1729],
]; // 1829

const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "to walk",
    "car",
    "van",
    "bike",
    "to walk",
    "car",
    "van",
    "car",
    "truck",
    "pogo stick" ,
];

console.log(data); // 15
console.log(data.length); //15
console.log(data[0]); //araba
console.log(data[14]); //pogostick
console.log(data[data.length - 1]); //pogostick
console.log(data[Math.round(data.length / 2)]); //bisiklet

console.log(mucitler);
console.log(mucitler[1]);
console.log(mucitler[0][1]);
console.log(mucitler.length);
console.log(mucitler[data.length - 1]);

mucitler[1] = ["Farabi", 1643];
console.log(mucitler);

mucitler[1] = "Farabi";
console.log(mucitler);
console.log(mucitler[3]);

mucitler[3][1] = 1867;
console.log(mucitler);

mucitler[mucitler.length - 1][1] = 1829;
console.log(mucitler);

let stringVal =
  "if you are working from the command line, you can open it with the following command";

let newArray = stringVal.split(" ");
console.log(newArray);

let newString = newArray.join();
console.log(newString);

newString = newArray.join(" ");
console.log(newString);

newString = newArray.join("###");
console.log(newString);

let c = stringVal;

newArray = stringVal.split("");
newArray[newArray.length] = "...";
newArray[0] = newArray[0].toUpperCase();
newString = newArray.join("");
console.log(newString);

function stringToUpperCase(params) {
  let newArray = params.split("");
  newArray[0] = newArray[0].toUpperCase();
  newArray[newArray.length] = "...";
  let newString = newArray.join("")
  return newString;
}
console.log(stringToUpperCase(stringVal));


const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList)
console.log(thirdList)

secondList.push(7, "mer", 9);
console.log(secondList)

secondList.pop();
console.log(secondList)


let indexNumber = secondList.indexOf("mer")
console.log(indexNumber)

secondList[4] = 8;
//secondList[secondList.indexOf("mer")] = 8;
console.log(secondList)

let lastIndexNumber = data.lastIndexOf("car");
console.log(lastIndexNumber)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits)

const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
fruit.reverse();
console.log(fruit)

const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points)

console.log(data.includes("truck"));
console.log(data.includes("mavi"));

const numbers = [1, 2, 3, 4, 5, 6, 7];
let newNumbers = numbers.slice(1,5);
//let newNumbers = numbers.slice();

console.log(newNumbers)

const numb = [1, 2, 3, 4, 5, 6, 7];
let newNumb = numb.splice(1,3);
//let newNumb = numb.splice();
console.log(newNumb)

let firstItem = [1, 2, 3];
let secondItem = [4, 5, 6];
let thirdItem = [firstItem];
thirdItem = [...firstItem];
thirdItem = [...firstItem, ...secondItem];
console.log(thirdItem)

const fru = ["Banana", "Orange", "Apple", "Mango"];
fru.shift();
console.log(fru)

let val = "       Hello World!        ";
console.log(val);
let result = val.trim();
console.log(val.trim());

const f = ["Banana", "Orange", "Apple", "Mango"];
f.unshift("Lemon","Pineapple");
console.log(f)

function filtMenü(menü, value) {
    if (menü.includes(value)){
        let indexNum = menü.indexOf(value);
        menü.splice(indexNum,1)
        return menü;
    }else {
        return menü   
    }
}

let menüList = ["bamya","çorba","patlican","pirasa","ispanak","künefe"]
let istenmeyen = "ispanak"

let filteredMenü = filtMenü(menüList, istenmeyen)
console.log(filteredMenü)

