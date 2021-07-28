const inquirer = require('inquirer');
const { generateQuestions } = require('./questions');

//  question for the role
const questionForRole = [
  {
    type: 'list',
    name: 'role',
    message: "which role would you like to add?",
    choices: ['engineer', 'intern']
  }
];

//  prompt for role to choose
const askForRole = () => {
  return new Promise( (resolve, reject) => {
    inquirer
      .prompt(questionForRole)
      .then(answer => answer.role)
      .then(resolve)
  });
};

//  handle whether to continue adding more team member or finish
const handleAddTeamMember = (answer) => {
  return new Promise((resolve, reject) =>  {
    if (answer.addMore) { // if the user want to add more team members
      resolve();
    } else {
      reject();
    };
  });
};


// prompt factory that will create a user prompt
// usage :
//   const prompt = promptFactory(handleAnswer, handleFinish)
//   prompt('manager') 
const promptFactory = (handleAnswer, handleFinish) => {
  const askForRoleInfo = (role) => {
    const questions = generateQuestions(role);
    inquirer
      .prompt(questions)
      .then((answer) => {
        handleAnswer(answer, role)
        return answer;
      })
      .then(handleAddTeamMember)
      .then(() => askForRole().then(askForRoleInfo), handleFinish)
  };
  return askForRoleInfo;
};




module.exports = promptFactory