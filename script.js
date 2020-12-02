var  database = [
    {
        username: "roman",
        password: "super"
    }
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "So tired from all the learning"
    },
    {
        username: "Sara",
        timeline: "Javascript is so much fun!"
    }
];

var userNamePrompt = prompt("Username: ");
var passwordPrompt = prompt("Password: ");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    }
    else {
        alert("Sorry, wrong username and password!");
    }

}

signIn(userNamePrompt, passwordPrompt);