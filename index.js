// var readlineSync = require("readline-sync");
import readlineSync from 'readline-sync'
import chalk from 'chalk';

const log = console.log;
// var chalk = require("chalk");
var score = 0;
var userName = readlineSync.question("What's your name? ");
log("====================================\n");
console.log("Welcome to quiz on Virat Kohli, " + userName + "\n");
log("====================================\n");
log("If you're a Virat Kohli fan then lets see how well you know him.\n");
log("====================================\n");
log("Down you can see the questions based on Virat Kohli the answer is among the given options choose the rights answers that suits the question by simply entering its option number")

function play(question, options, answer) {
  var userAnswer = readlineSync.keyInSelect(options, question);
  if (options[userAnswer] === answer) {
    log(chalk.green("You are right" + "\n"));
    score++;
    log(chalk.green("Current Score : " + score));
  }
  else {
    log(chalk.red("You are wrong the correct answer is " + answer + "\n"));
    log(chalk.red("Current Score : " + score));
  }
}
const quizList = [{
  question: "1: Virat scored 183 against whom in 2012?",
  options: ["Pakistan", "Bangladesh", "Australia", "England"],
  answer: "Pakistan"
}, {
  question:
    "2: How many double hundreds he have in test?",
  options: ["1", "4", "3", "7"],

  answer: "7"
}, {
  question:
    "3: How many centuries he have in total?",
  options: ["23", "45", "73", "100"],
  answer: "73"
}, {
  question:
    "4: In which IPL season Kohli scored 973?",
  options: ["2010", "2016", "2015", "2023"],
  answer: "2016"
}, {
  question:
    "5: Against which International team Kohli has more Hundreds?",
  options: ["Australia", "England", "Sri Lanka", "Pakistan"],
  answer: "Sri Lanka",
}, {
  question:
    "6: His best innings so far in t20 is against whom?",
  options: ["Pakistan", "England", "Australia", "New Zealand"],
  answer: "Pakistan"
}

]
var j = 1;
for (var i = 0; i < quizList.length; i++) {
  log(chalk.bold("\nQuestion " + (j++)));
  var currentQuestion = quizList[i];
  play(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
}
