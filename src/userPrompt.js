const inquirer = require('inquirer');
const { generateQuestions } = require('./questions');


const askForRole = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'role',
        message: "which role would you like to add?",
        choices: ['engineer', 'intern']
      }
    ])
    .then( (answer) => askForRoleInfo(answer.role));
}

const askForRoleInfo = (role) => {
  const questions = generateQuestions(role);
  inquirer
    .prompt(questions)
    .then( (answer) => {
      console.log(answer);
      if (answer.addMore) {
        askForRole();
      } else {
        console.log('Generating the web page!')
      }
    });
};

askForRoleInfo('manager');