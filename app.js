let user = [
  // array position 0
  {
    // object 1
    username: "David Copperfield",
    email: "david@front.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "David Copper#0001",
    lessonsCompleted: [0, 1, 2],
  },
  // array position 1
  {
    // object 2
    username: "Son Goku",
    email: "SonGoku@back.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Son Goku#0001",
    lessonsCompleted: [0, 1, 3, 5, 8],
  },
  // array position 2
  {
    username: "Ichigo",
    email: "Ichigo@back.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Ichigo#0001",
    lessonsCompleted: [0, 1, 2, 3, 4],
  },
];

function login(email, password) {
  for (let i = 0; i < user.length; i++) {
    console.log(i);
    if (user[i].email === email) {
      if (user[i].password === password) {
        console.log("Logged in - Welcome mofo");
        return;
      } else {
        console.log(
          `Incorrect password, please try again, ${user[i].username}`
        );
      }
    } else {
      console.log(
        `Hello, ${user[i].username}, please re-enter your email/password bitch`
      );
    }
  }
}

/**
 * Create a register function that accepts multiple variables
 *
 * inside register function
 *      create a user object
 *      push this user object onto the 'users' array
 */

function register(user1) {   //entering the user1 argument object
  user.push(user1); //pushing user1 object onto the user array
}

register({
    username: "Donatello",
    email: "donatello@email.com",
    //password: "tet123",
    //subscriptionStatus: "nonVIP",
    discordId: "Dona#1234",
    lessonsCompleted: [1, 3, 4, 58]
});
console.log(user);

console.log(user[3].password);

/**
 * Document Object Model
 */

// First way of accessing an element
console.log(document.querySelector('h1'));    //Access ID by # or class by .

// Second way of accessing an element
console.log(document.getElementById('title'));  // ID, do not need #

// Change inner HTML
document.querySelector('.title').innerHTML += ' Frontend Simplified'  // += add to the end

// Change CSS
document.querySelector(".title").style.fontSize = '100px';

function changeTitleToRed(){
    console.log('clicked');
    document.querySelector(".title").style.backgroundColor = 'red';
}

function toggleDarkMode() {
    console.log('Clicked');
    document.querySelector('body').classList.toggle("dark-theme");
}