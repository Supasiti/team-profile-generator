const inquirer = require('inquirer');
const { generateQuestions } = require('./questions');

// ask for role 
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

// create a function to handle with the answer from user prompt
const handleRoleInfoAnswerFactory = (handleAnswer, handleFinish) => {
  return (answer, role) => {
    handleAnswer(answer, role) // do something with answer

    if (answer.addMore) {
      askForRole();
    } else {
      handleFinish() // do something when finish 
    };
  };
};

//  ask for user info based on the role
const askForRoleInfoFactory = (handleRoleInfoAnswer) => {
    return (role) => {
      const questions = generateQuestions(role);
      inquirer
        .prompt(questions)
        .then((answer) => handleRoleInfoAnswer(answer, role))
    };
  };

// const handleRoleInfoAnswer = handleRoleInfoAnswerFactory( 
//     (answer, role) => {
//       console.log(role);
//       console.log(answer);
//   },
//     () => console.log('Generating the web page!')
//   );
// const askForRoleInfo = askForRoleInfoFactory(handleRoleInfoAnswer);

// askForRoleInfo('manager');

module.exports = {
  askForRoleInfoFactory, 
  handleRoleInfoAnswerFactory
};