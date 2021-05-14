let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneNumGoals = document.querySelector("#teamone-numgoals");
let teamOneShotButton = document.querySelector("#teamone-shoot-button");
let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");
let teamTwoShotButton = document.querySelector("#teamtwo-shoot-button");
let resetButton = document.querySelector("#reset-button");
let numResets = document.querySelector("#num-resets");



//Shows variable settings in console for checking.
console.log(teamOneNumGoals, teamOneNumShots, teamOneShotButton, teamTwoNumGoals, teamTwoNumShots, teamTwoShotButton, resetButton, numResets);

function shotResult(){
  //returns a bool that gives you a 50% chance to get true
  return (Math.random() < 0.5);
};

teamOneShotButton.addEventListener("click", function(){
  if (shotResult()){
    teamOneNumGoals.innerText = parseInt(teamOneNumGoals.innerText) + 1;
  };
  teamOneNumShots.innerText = parseInt(teamOneNumShots.innerText) + 1;
});

teamTwoShotButton.addEventListener("click", function(){
  if (shotResult()){
    teamTwoNumGoals.innerText = parseInt(teamTwoNumGoals.innerText) + 1;
  };
  teamTwoNumShots.innerText = parseInt(teamTwoNumShots.innerText) + 1;
});


