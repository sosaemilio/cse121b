// Activiy 1 - Map
const numbersArray = ["one", "two", "three"];
const stepsHTML = numbersArray.map((number) => {
    return `<li>${number}</li>`;
});

document.getElementById("myList").innerHTML = stepsHTML.join();

// Activity 2 - Map
const gradesArray = ["A", "B", "A", "C"];

function gpa(gradeLetter) {
    let grade = 0;
    if (gradeLetter == "A") {
        grade = 4;
    } else if (gradeLetter == "B") {
        grade = 3;
    } else if (gradeLetter == "C") {
        grade = 2;
    } else if (gradeLetter == "D") {
        grade = 1;
    }
    return grade;
}
const grades = gradesArray.map(gpa);

// Activity 3 - Reduce
const singleGrade = grades.reduce((accumulator, currentValue) => accumulator + currentValue);
const totalGpa = singleGrade / grades.length;

// Activity 4 - Filter

const fruitsArray = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const fruits = fruitsArray.filter((fruit) => fruit.length > 6);

// Activity 5 - IndexOf

const numbers2Array = [12, 34, 21, 54];
var luckNumber = 21;

if (numbers2Array.indexOf(luckNumber) > 0)  {
    console.log("number found");
} else {
    console.log("Not FOUND")
}