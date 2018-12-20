var customname = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

var storyText="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";




var insertX = ['Willy the Goblin', 'Big Daddy','Father Christmas'];
var insertY = ['the soup, kitchen', 'Disneyland','the White House'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];


//a function that performs the lottery and select a random item from any gien randomValueFromArray
function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[ random];
}



 randomize.addEventListener("click",result);

// substitete array values back into our storyText, and reflext it back into the html so our player
// can see the result of their name

function result(){

var newStory = storyText;
console.log(newStory);

var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);


console.log(newStory);

newStory = newStory.replace(":insertx", xItem);

console.log(newStory);
newStory = newStory.replace(":insertx", xItem);
console.log(newStory);
newStory = newStory.replace(":inserty", yItem);
console.log(newStory);
newStory = newStory.replace(":insertz", zItem);

// if user input is not empty, replace bob with real-time user input
if(customname.value !== ""){
 // do something
var name = customName.value;
newStory = newStory.replace("Bob",name);


}

if( document.getElementById('uk').checked){



// if UK button is clicked, replace 94 fahrenheit to centigrade,
//replace 300 pounds to stone
var weight = Math.round(300*0.007) + "stone";
var tempreture = Math.round(94-32)*5/9 + "centigrade";

newStory = newStory.replace("94 fahrenheit", tempreture);
newStory = newStory.replace("300 pounds", weight);
}



story.textContent = newStory;
story.style.visibility = "visible";
}
