const promptFactory = require('./userPrompt');

const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

// const handleRoleInfoAnswer = handleRoleInfoAnswerFactory( 
//     (answer, role) => {
//       console.log(role);
//       console.log(answer);
//   },
//     () => console.log('Generating the web page!')
//   );
// const askForRoleInfo = askForRoleInfoFactory(handleRoleInfoAnswer);

const handlingAnswer =  (answer, role) => {
  console.log(role);
  console.log(answer);
};
const handlingFinish = () => {console.log('Generating the web page!');}

const prompt = promptFactory(handlingAnswer, handlingFinish);
prompt('manager');
