//console.log("Hemanth Raju");
var readLineSync= require("readline-sync");
const chalk = require("chalk");
var userName = readLineSync.question("What is your name? ");

console.log("Hi "+userName+" Do you know Hemanth Raju?");
console.log("Lets play a Quiz!!!")
var score =0;

var highscores = [{
  name:"Hemanth",
  score:8
},{
  name:"Tanay",
  score:6
},{
  name:"Ankita",
  score:1
}]

function play(question,answer){
  var userText = readLineSync.question(question);
  
  if(userText.toUpperCase()===answer.toUpperCase()){
      score=score + 1;
      console.log("Right!!")
  }else{
    console.log("Wrong!!");
  }
  console.log("Your current score is "+score);
  console.log("--------------------");
}

var questions=[{
  question:"What is the capital of India? ",
  answer:"Delhi"
},{
  question:"What is the capital of Karnataka? ",
  answer:"Bangalore"
}]

for(var i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY!! You scored : "+chalk.blue(score))

for(var i=0;i<highscores.length;i++){
  var highscore=highscores[i].score;
  //console.log("Cool")
  if(score > highscore){
    highscores[i].name=userName;
    highscores[i].score=score;
    console.log(userName,score);
    console.log(highscores[i].name,highscores[i].score)
  }
}
console.log("Check the high scores : ");
for(var i=0;i<highscores.length;i++){
console.log(highscores[i].name+" "+highscores[i].score);
}