const promptFactory = require('./src/userPrompt');
const {handleAnswer, handleFinish } = require('./src/answerHandler');


const prompt = promptFactory(handleAnswer, handleFinish);
console.log('\n\x1b[35mWelcome to Team Profile Generator!\x1b[0m\n\nPlease add your team manager.')
prompt('manager');