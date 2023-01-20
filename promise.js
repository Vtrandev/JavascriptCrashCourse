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
    const data = await response.json()
    emailRef.innerHTML = data.email
}

main()

