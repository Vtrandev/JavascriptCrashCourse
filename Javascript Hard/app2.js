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

    return
}
console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));