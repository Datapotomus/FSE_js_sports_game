let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneNumGoals = document.querySelector("#teamone-numgoals");
let teamOneShootButton = document.querySelector("#teamone-shoot-button");

//Shows variable settings in console for checking.
console.log(teamOneNumGoals, teamOneNumShots, teamOneShootButton);

function shotResult(){
  //returns a bool that gives you a 50% chance to get true
  return (Math.random() < 0.5);
};

//checks my work
console.log("Shot Result: " + shotResult());

teamOneShootButton.addEventListener("click", function(){
  console.log("button click worked")
});
