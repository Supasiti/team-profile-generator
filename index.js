const promptFactory = require('./src/userPrompt');
const {handleAnswer, handleFinish } = require('./src/answerHandler');


const prompt = promptFactory(handleAnswer, handleFinish);
prompt('manager');