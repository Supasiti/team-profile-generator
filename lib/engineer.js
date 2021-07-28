const Employee = require('./employee');
const { validateType } = require('../src/validation');

const isDataMissing  = (github) => !(github);
const isDataOfCorrectType = (github) => validateType(github, 'github', 'string');

const validateInput = (github) => {
  if (isDataMissing(github)) {
    console.error(`some inputs are missing`)
    return false ;
  }
  return isDataOfCorrectType(github);
};

//  -------------
//  Engineer 
class Engineer extends Employee {
  constructor (name, id, email, github) {
    super(name, id, email);
    if (!validateInput(github)) return {};

    this.github = github;
  }

  getRole () {
    return 'Engineer';
  }

  getGithub () {
    return this.github;
  }
};


module.exports = Engineer;