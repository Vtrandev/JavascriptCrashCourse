
//      Show rating
console.log("Show rating")





console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));



// //      Show rating
// console.log("Show rating")

// function showRating(num) {
//     let rating = '';
//     for (i = 0; i < Math.floor(num); i++) {
//         rating += '*' 
//         if (i !== Math.floor(num)-1) {
//             rating += ' '
//         }
//     }
//     if (!Number.isInteger(num)) {
//         rating += ' .'
//     }
//     return rating
// }

// console.log(showRating(3));
// console.log(showRating(4.5));
// console.log(showRating(0.5));

// //    Sort by lowest to highest price
// console.log("Sort by lowest to highest price")

// function sortLowToHigh(arr) {
//     return arr.sort((a, b) => a - b);
//     // lowToHigh.reverse();
// }

// console.log(sortLowToHigh([208, 50, 40, 10, 30, 10]));
// console.log(sortLowToHigh([5, 10, 0, -5]));
// console.log(sortLowToHigh([3, 2, 1, 0]));


// //    Sort by highest to lowest price
// console.log("Sort by highest to lowest price")

// function sortHighToLow(items) {
//     return items.sort((a, b) => a.price - b.price);
// }

// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 30 },
//     { id: 3, price: 60 },
//     { id: 4, price: 10 },
//   ])
// );



// //    Find all the posts by a single user
// console.log("Find all the posts by a single user")

// async function postsbyUser(userID) {
//     const promise = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const result = await promise.json()   //Only need .json when talking to a backend server
//     const posts = result.filter(elem => elem.userId === userID)
//     console.log(posts)
// }

// postsbyUser(4);



// //First 6 incomplete Todos
// console.log("First 6 incomplete Todos")

// async function firstSixIncomplete(num) {
//     let counter = 0;
//     const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const result = await promise.json()

//     // const incompleteTasks = result.filter(elem => !elem.completed).slice(0, 6);
//     const posts = result.filter((elem) => {
//       if (!elem.completed && counter < num) {
//         counter++;
//         return true;
//       }
//     });
//     console.log(posts);
// }

// firstSixIncomplete(6);

