const promptFactory = require('./src/userPrompt');
const {handleAnswer, handleFinish } = require('./src/answerHandler');


const prompt = promptFactory(handleAnswer, handleFinish);
console.log(
`
\x1b[35mWelcome to Team Profile Generator!\x1b[0m
  
Please starting by adding your team manager.
`);

prompt('manager');