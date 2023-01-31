//      Show rating
console.log("Show rating")

function showRating(rating) {
    let star = '';
    for (let i = 0; i < Math.floor(rating); i++) {
        if (i == Math.floor(rating) - 1) {
            star += '*';
        }
        else {
            star += '* ';
        }

    }
    if (!Number.isInteger(rating)) {
        star += '.';
    }
    return star;
}
console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));

//      Sort by lowest to highest price
console.log("Sort by lowest to highest price")

function sortLowToHigh(arr) {
    return arr.sort((a, b) => a - b)
}
console.log(sortLowToHigh([20, 40, 1000, 30, 50, 10]));
console.log(sortLowToHigh([5, 10, 0, -5]));
console.log(sortLowToHigh([3, 2, 1, 0]));

//      Sort by highest to lowest price
console.log("Sort by highest to lowest price")

function sortHighToLow(arr) {
    return arr.sort((a, b) => (b.id - a.id))
}
console.log(sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}
]));

//      Find all the posts by a single user
console.log("Find all the posts by a single user")


async function postsByUser(id) {
    const post = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postData = await post.json();
    userPost = postData.filter((post) => post.userId == id)
    return console.log(userPost);
}
postsByUser(4);

//      First 6 Incomplete Todos
console.log("First 6 Incomplete Todos")


async function firstSixIncomplete(num) {
    const promise = await fetch('https://jsonplaceholder.typicode.com/todos')
    const result = await promise.json();
    let counter = 0

    userPost = result.filter((post) => {
        if (!post.completed && counter < num) {
            counter++;
            return true
        }
})
    return console.log(userPost);
}
firstSixIncomplete(20);