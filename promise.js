//console.log(fetch('https://jsonplaceholder.typicode.com/users/1'));

const emailRef = document.querySelector(".email");

// 1. Then
fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
  response.json().then((data) => {
    console.log(data);
    emailRef.innerHTML = data.email;
  });
});

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    emailRef.innerHTML = data.name
  });

// 2. Async/Await
async function main() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()             //Only need .json when talking to a backend server
    emailRef.innerHTML = data.email
}

main();

const statusRef = document.querySelector('.status')
const videoRef = document.querySelector('.video')

// To create a Promise function
function getSubscriptionStatus() {
    return new Promise((resolve, reject) => {         //return a promise
        setTimeout(() => {
        resolve("VIP")
        }, 2000);
    });
}

// 1. Then method
getSubscriptionStatus().then(response => console.log(response))


// 2. Async/Await method
async function main() {
    const status = await getSubscriptionStatus()
    statusRef.innerHTML = status;
}

main();

/**
 * 1. Create a function called `getVideo`
 * 2. Accept a parameter called `subscriptionStatus`
 * 3. Return a new Promise inside of the function that:
 *      - if VIP resolve('show video')
 *      - if FREE resolve('show trailer')
 *      - otherwise reject('no video')
 * 4. console.log the result of getVideo(status) in main()
 */

function getVideo (subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === 'VIP') {
            resolve('show video')
        }
        else if (subscriptionStatus === 'FREE') {
            resolve('show trailer')
        }
        else {reject('no video')}
});
}

async function main2() {
    try {
        const status = await getVideo('VIP')
        videoRef.innerHTML = status;
    }
    catch (e) {
        videoRef.innerHTML = e;
    }
}

main2();

