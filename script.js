var  database = [
    {
        username: "roman",
        password: "super"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    },
];

var newsFeed = [
    {
        username: "Bob",
        timeline: "So tired from all the learning"
    },
    {
        username: "Sara",
        timeline: "Javascript is so much fun!"
    },
    {
        username: "Bonjovi",
        timeline: "I have no idea why I'm here?..."
    }

];

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    }
    else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("Username: ");
var passwordPrompt = prompt("Password: ");

signIn(userNamePrompt, passwordPrompt);