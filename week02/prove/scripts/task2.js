const myName = "Emilio Sosa";

document.querySelector("#name").textContent = myName;

const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

const myImage = "images/profile.jpg";

/* Testing purposes only
const newImage = document.createElement("img")
document.body.appendChild(newImage)
*/
// document.querySelector("img").setAttribute("src", myImage);

// Step 1 and 2
const favoriteFoods = ["Pizza", "Cachapa", "Chinese Food"];
document.querySelector("#food").textContent = favoriteFoods;


// Step 3 and 4
var favoriteFood = "apple";
favoriteFoods.push(favoriteFood);
document.querySelector("#food").textContent = favoriteFoods;

// Step 6 and 7
favoriteFoods.shift();
document.querySelector("#food").textContent = favoriteFoods;

// Step 8 and 9
favoriteFoods.pop();
document.querySelector("#food").textContent = favoriteFoods;