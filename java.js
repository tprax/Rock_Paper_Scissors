document.getElementById('rock').onclick = user
document.getElementById('paper').onclick = user
document.getElementById('scissors').onclick = user

var computerGuess = ["rock", "paper", "scissors"]
var computerChoice = [Math.floor(Math.random() * computerGuess.length + 1)]
console.log("Computer: " + computerChoice)

var compare = function(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return "It is a tie!"
  }
  if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      return "Rock Wins!"
    } else {
      return "Paper Wins!"
    }
  }
  if (userChoice === "paper"){
    if (computerChoice === "rock") {
      return "Paper Wins"
    } else {
      return " Scissors Wins!"
    }
    if (userChoice === "scissors"){
      if (computerChoice === "paper"){
        return "Scissors Wins"
      } else {
        return "Rock Wins"
      }
    }
  }
}
 function user(){
  var userChoice = this.id;
  document.getElementById("userOutPut").innerHTML = ("User: " + userChoice + ". ")
  document.getElementById("computerOutPut").innerHTML = ("Computer: " + computerChoice + ". ")
  document.getElementById("winner").innerHTML = ("Winner is: " + compare(userChoice,computerChoice + "."))
 }
