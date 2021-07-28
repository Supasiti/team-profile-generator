const questionsToAsk = {
  manager: ['name','id', 'email', 'officeNumber', 'addMore'],
  engineer: ['name','id', 'email', 'github', 'addMore'],
  intern: ['name','id', 'email', 'school', 'addMore']
}

const validateNumber = (input) => {
  if (isNaN(input)) return 'Please enter a valid number';
  return true;
}; 

const validateEmail = (input) => {
  if (input.split('').includes('@')) return true;
  return 'Please enter a valid email address'
};


const generateAllQuestions = (role) => [
  {
    type: 'input',
    name: 'name',
    message: `What is your ${role}\'s name?`,
  },
  {
    type: 'number',
    name: 'id',
    message: `What is your ${role}\'s ID?`,
    validate: validateNumber
  },
  {
    type: 'input',
    name: 'email',
    message: `What is your ${role}\'s email?`, 
    validate: validateEmail
  },
  {
    type: 'number',
    name: 'officeNumber',
    message: `What is your ${role}\'s office number?`,
    validate: validateNumber
  },
  {
    type: 'input',
    name: 'github',
    message: `What is your ${role}\'s GitHub username?`,
  },
  {
    type: 'input',
    name: 'school',
    message: `What is your ${role}\'s school name?`,
  },
  {
    type: 'confirm',
    name: 'addMore',
    message: 'Would you like to add more team member?',
  }
]

// generate questions based on role
const generateQuestions = (role) => {
  if (role in questionsToAsk) {
    const questionNames = questionsToAsk[role];
    const allQuestions = generateAllQuestions(role);
    const result = allQuestions.filter((question) => questionNames.includes(question.name));
    return result;
  }
}


module.exports = {generateQuestions};