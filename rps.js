// Rock Paper Scissor
// Rock = 0
// Paper = 1
// Scissor = 2


const player = 2;
const computer = Math.floor(Math.random() * 3)

let userPicked;
let compPicked;

// Player's picked
if (player === 0) {
    userPicked = "Rock";
    console.log("Player picked:      Rock")
} else if (player === 1) {
    userPicked = "Paper";
    console.log("Player picked:      Paper")
}
else {
    userPicked = "Scissor";
    console.log("Player picked:      Scissor");
}

// Computer's picked
if (computer === 0) {
    compPicked = "Rock";
    console.log("Computer picked:      Rock")
} else if (computer === 1) {
    compPicked = "Paper";
    console.log("Computer picked:      Paper")
}
else {
    compPicked = "Scissor";
    console.log("Computer picked:      Scissor");
}

// Final Result
if (userPicked === "Rock" && compPicked === "Paper") { 
    console.log("Computer Win.")
} else if (userPicked === "Paper" && compPicked === "Scissor") {
    console.log("Computer Win.")
} else if (userPicked === "Scissor" && compPicked == "Rock") {
    console.log("Computer Win.")
} else if (userPicked === "Paper" && compPicked === "Rock") { 
    console.log("User Win.")
} else if (userPicked === "Scissor" && compPicked === "Paper") {
    console.log("User Win.")
} else if (userPicked === "Rock" && compPicked === "Scissor") {
    console.log("User Win.")
} 
else {
    console.log("Try Again.")
}




