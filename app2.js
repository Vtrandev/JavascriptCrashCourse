let arr = [20, 30, 40, 50, 100]

let newArr = arr.filter(element => element < 50)
console.log(newArr)


let grades = ['A+', 'A', 'Fail']

const goodGrades = grades.filter((element) => element !== 'Fail')
console.log(goodGrades)

let newGrades = [];
for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== 'Fail') {
        newGrades.push(grades[i])
    }
}

console.log(newGrades);

newArr = [1, 5, 10, 3];

let cents = newArr.map((element) => element*100)
console.log(cents);

dollars = [0, 10, 20];
cents = [];

for (let i = 0; i < dollars.length; i++) {
        cents.push(dollars[i]*100)
}
console.log(cents);


//First way of accessing an element**
console.log(document.querySelector('#title'));     //access #id, .classes or element

//Second way of accessing an element
console.log(document.getElementById('title'));      //access id only

//Change HTML
document.querySelector('h1').innerHTML += ' Frontend';

//Change CSS
document.querySelector('#title').style.color = 'blue';

function changeTitleToRed() {
    document.querySelector('#title').style.color = 'red';
}

function toggleDarkMode () {
    document.querySelector('body').classList.toggle("dark-theme");
}
