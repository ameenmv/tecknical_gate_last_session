// console.error(["hello cis team!" , "ameen"]);
// console.table(["hello cis team!" , "ameen"]);
// console.log(["hello cis team!", "ameen"]);

// let age = 21;

const name = "ameen";

// console.log(age)
// console.log(name)

// var city = "karachi";

// const name = "ameen"; // string
// const age = 21; // number
// const isStudent = false; // boolean
// const sallary = null; // null
// let address; // undefined

// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof isStudent); // boolean
// console.log(typeof sallary); // object (null is considered an object in JavaScript)
// console.log(typeof address); // undefined

// console.log("my name is : " + name);

// console.log(`my name is : ${name} `)

// console.log(10 + 5)
// console.log(10 - 5)
// console.log(10 * 5)
// console.log(10 / 5)
// console.log(34 % 2) // modulus operator gives the remainder of the division

// console.log(10 == "10") //true
// console.log(10 === "10") //false

// console.log(Math.round(2.1))
// console.log(Math.ceil(2.1))
// console.log(Math.floor(2.9))

// console.log(Math.random() * 200) // generates a random number between 0 and 100

// const userAge = 20;

// if (userAge > 18) {
//    console.log("you are bigger than 18")
// }
// else (
//    console.log("you are smaller than 18")
// )

// const Age = 10;

// const status = ;

// console.log(Age > 18 ? "adult" : "not adult")

// const userMoney = 0;
// console.log(userMoney || 50); //50
// console.log(userMoney ?? 50); //0

// const users = ["ahmed", "ameen", "ali"];

// // console.log(users.push("hassan"))
// // console.log(users)
// // console.log("----------------")
// // console.log(users.pop())
// // console.log(users)
// console.log("----------------");
// console.log(users.unshift("hassan"))
// console.log(users)
// console.log("----------------");
// console.log(users.shift())
// console.log(users)

// let fruits = [
//   "banana",
//   "orange",
//   "apple",
//   "banana",
//   "orange",
//   "apple",
//   "banana",
//   "orange",
//   "apple",
//   "banana",
//   "orange",
//   "ameen",
//   "apple",
// ];

// for (let i = 6; i < 12; i++) {
//   console.log(fruits[i]);
// }

// console.log(fruits.length)

// function sumAll(...numbers) {
//    let total = 0;
//    for (let i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//    }
//    return total;
// }

// console.log(sumAll(300,400,21,4))

// const multiply = (x, y) =>  x * y;

// console.log(multiply(5, 10))

// let names = ["ameen", "ali", "hassan"];
 
// let startWithA = names.filter(name => name.startsWith("a"));
// console.log(startWithA)

const user = {
   name: "ameen",
   age: 26,
   skills: ["html", "css", "js"],
   sayHello: function (name) {
      return `hello ${name}, my name is ${this.name}`;
   }
}

console.log(user.sayHello("ali"))


