const inquirer = require('inquirer');
const { validateType } = require('./validation');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'what is your manager\'s name?',
  },
  {
    type: 'number',
    name: 'id',
    message: 'what is your manager\'s ID?',
    validate: (input) => validateType(input, 'ID', 'number')
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your manager\'s email?', 
    validate: (input) => validateType(input, 'email', 'email')
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: 'what is your manager\'s office number?',
    validate: (input) => validateType(input, 'Office number', 'number')
  },
]


inquirer.prompt(questions)
  .then(console.log);