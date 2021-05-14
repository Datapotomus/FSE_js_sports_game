let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneNumGoals = document.querySelector("#teamone-numgoals");
let teamOneShotButton = document.querySelector("#teamone-shoot-button");
let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");
let teamTwoShotButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");
let basketballHit = new Audio('../assets/sounds/basketball_hit.mp3');


//Shows variable settings in console for checking.
console.log(teamOneNumGoals, teamOneNumShots, teamOneShotButton, teamTwoNumGoals, teamTwoNumShots, teamTwoShotButton, resetButton, numResets);

function shotResult(){
  //returns a bool that gives you a 50% chance to get true
  return (Math.random() < 0.5);
};

function whoWon(){
  if (teamOneNumGoals.innerText > teamTwoNumGoals.innerText){
    return "Team 1 is the Winner!"
  } else if (teamOneNumGoals.innerText < teamTwoNumGoals.innerText){
    return "Team 2 is the Winner!"
  } else {
    return "The Game was a Tie!"
  }
};

teamOneShotButton.addEventListener("click", function(){
  if (shotResult()){
    basketballHit.play();
    teamOneNumGoals.innerText = parseInt(teamOneNumGoals.innerText) + 1;
  };
  teamOneNumShots.innerText = parseInt(teamOneNumShots.innerText) + 1;
});

teamTwoShotButton.addEventListener("click", function(){
  if (shotResult()){
    basketballHit.play();
    teamTwoNumGoals.innerText = parseInt(teamTwoNumGoals.innerText) + 1;
  };
  teamTwoNumShots.innerText = parseInt(teamTwoNumShots.innerText) + 1;
});

resetButton.addEventListener("click", function(){
  alert(whoWon() + "\n Final score was " + teamOneNumGoals.innerText + " to " + teamTwoNumGoals.innerText + "!");
  teamOneNumGoals.innerText = 0;
  teamOneNumShots.innerText = 0;
  teamTwoNumGoals.innerText = 0;
  teamTwoNumShots.innerText = 0;
  numResets.innerText = parseInt(numResets.innerText) + 1;
});

