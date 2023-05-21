////////////////////////////////////////////////////////////
//// JAVASCRIPT JS BASICS
////////////////////////////////////////////////////////////

const x = 6;

// 1. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

const add = function (a, b) {
  return a + b + x;
};

console.log("!@-------Add(no arrow)-------@!");
console.log(add(2, 3));
console.log("\n");

// 2. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const addArrow = (a, b) => {
  return a + b + x;
};

console.log("!@-------Add(arrow)-------@!");
console.log(addArrow(2, 3));
console.log("\n");

// 3. Write a function that returns another function. (use arrow functions please)

const returnFunc = () => {
  return () => {
    console.log("I am a function that was returned");
  };
};

console.log("!@-------Return Function-------@!");
returnFunc()();
console.log("\n");

// 4. Given the following code explain why the function that returns from getFunction still has access to variable "y" even when "y" is not a global variable.

const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log("InsideFunc:", getFunction()(2));

// The function that is returned from getFunction still has access to variable "y" because of closure.

// 5. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and and log the result to the console.
// Make sure to handle errors that could be thrown by "couldThrowError()"
// If there is an error log "sorry, there was an error" to the console.

const couldThrowError = () => {
  if (Math.ceil(Math.random() * 2) < 2) {
    throw new Error("Error was thrown");
  }

  return "success";
};

////////////////////////////////////////////////////////////
//// Handling data:
////////////////////////////////////////////////////////////

const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const favoriteFoods = userData.map((user) => {
  return { id: user.id, favoriteFoods: user.favorites.food.length };
});

console.log("!@-------Favorite Foods-------@!");
console.log(favoriteFoods);
console.log("\n");

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaLovers = userData.reduce((acc, user) => {
  if (user.favorites.food.includes("pizza")) {
    acc.push(user.name);
  }
  return acc;
}, []);

console.log("!@-------Pizza Lovers-------@!");
console.log(pizzaLovers);
console.log("\n");

// 7. Show an an example of a switch statement being used

const switchExample = (num) => {
  switch (num) {
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("two");
      break;
    default:
      console.log("not one or two");
  }
};

console.log("!@-------Switch Example-------@!");
switchExample(1);
switchExample(2);
switchExample(3);
console.log("\n");

////////////////////////////////////////////////////////////
//// OBJECT AND ARRAY DESTRUCTURING
////////////////////////////////////////////////////////////

const userPersonalData = {
  name: "peter",
  age: "56",
  birthday: "jan 1st",
};
const userGameData = {
  score: 4546,
  accomplishments: [
    "won award for being good gamer",
    "won 1st win",
    "got good score on the weekend",
  ],
};

// 8. Combine the personalData and userGameData into a user object that is equal to the object below, by using the spread operator:
// const user = {
//  name: 'peter',
//  age: '56',
//  birthday: 'jan 1st',
//  score: 4546,
//  accomplishments: ['won award for being good gamer', 'won 1st win', 'got good score on the weekend'],
// }

const userDataInfo = { ...userPersonalData, ...userGameData };

console.log("!@-------User-------@!");
console.log(userDataInfo);
console.log("\n");

// 9. Make a copy of your new user object but override the birthday to december 31st

const userDataInfoCopy = { ...userDataInfo, birthday: "dec 31st" };

console.log("!@-------User Copy-------@!");
console.log(userDataInfoCopy);

// 10. Use the spread operator to make a copy of the accomplishments array and store it in a new variable

const accomplishmentsCopy = [...userDataInfoCopy.accomplishments];

console.log("!@-------Accomplishments Copy-------@!");
console.log(accomplishmentsCopy);
console.log("\n");

//  11.Given the object bellow, use object destructuring to get the favorite food value (user.name.favoriteThings.food)
//  and store it in a variable name food

var user = {
  name: "pete",
  age: "32",
  favoriteThings: {
    food: ["pizza", "tacos", "burgers", "italian"],
    movies: [],
  },
};

const { food } = user.favoriteThings;

console.log("!@-------Favorite Food-------@!");
console.log(food);
console.log("\n");

// 12. Once you have grabbed the favorite foods. Destructure the food array to grab only the first 2 values. //

const [firstFood, secondFood] = food;

console.log("!@-------First and Second Food-------@!");
console.log(firstFood, secondFood);
console.log("\n");

// 13. use object destructuring and the rest operator to transform the following array into 3 variables: name, age, and food.
//    the food variable should have all the array items starting from the third one.
const data = ["peter", "34", "apple", "oranges", "pizza", "tacos"];

const [name, age, ...foodItem] = data;

console.log("!@-------Name, Age, and Food-------@!");
console.log(name, age, foodItem);
console.log("\n");

// 14. use object destructuring to grab the following from the userInfo object:
// - The user's name and in a constant named userName.
// - The user's favorite food array and name it favoriteFood.
// - The users first favorite thing (cars) and name it favoriteThing
// - The users second favorite thing (jewelry) and name it secondfavoriteThing

const userInfo = {
  name: "Peter",
  favorites: {
    needs: {
      food: ["burger", "pizza", "tacos", "fried chicken", "sushi"],
    },
    wants: {
      things: ["cars", "jewelry"],
    },
  },
};

const {
  name: userName,
  favorites: {
    needs: { food: favoriteFood },
    wants: {
      things: [favoriteThing, secondFavoriteThing],
    },
  },
} = userInfo;

console.log("!@-------User Info-------@!");
console.log(userName);
console.log(favoriteFood);
console.log(favoriteThing);
console.log(secondFavoriteThing);
console.log("\n");

var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

module.exports = fetchData;

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Promises:
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function that returns a promise.
var fetchData = () =>
  new Promise((resolve, reject) => {
    console.log("fetchingData from imaginary database");
    setTimeout(() => {
      try {
        // fetchingData from imaginary database
        if (Math.ceil(Math.random() * 2) < 2) {
          throw new Error("Error!");
        }
        resolve({ name: "john", age: 42 });
      } catch (error) {
        reject(error);
      }
    }, 5000);
  });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Call fetchData (which returns a promise) and use the .then()  method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetchData()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

console.log("!@-------Fetch Data-------@!");
console.log(data);
console.log("\n");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16. Call fetchData (which returns a promise) and use the async/await method to log the value the promise resolves with to the javascript console.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const fetchAsyncData = async () => {
//   try {
//     const data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchAsyncData();

// console.log("!@-------Fetch Async Data-------@!");
// console.log(data);
// console.log("\n");
