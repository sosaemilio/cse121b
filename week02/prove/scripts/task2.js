const myName = "Emilio Sosa";
document.querySelector("#name").textContent = myName;

const currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;

const myImage = "images/profile.webp";
// NOTE: I couldn't find if we had to create the img element and then add the new image
const newImage = document.createElement("img")
document.body.appendChild(newImage)

document.querySelector("img").setAttribute("src", myImage);

const favoriteFoods = ["Pizza", "Cachapa", "Chinese Food"];
document.querySelector("#food").textContent = favoriteFoods;

var favoriteFood = "apple";
favoriteFoods.push(favoriteFood);
document.querySelector("#food").textContent = favoriteFoods;

favoriteFoods.shift();
document.querySelector("#food").textContent = favoriteFoods;

favoriteFoods.pop();
document.querySelector("#food").textContent = favoriteFoods;