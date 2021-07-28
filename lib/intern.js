const Employee = require('./employee');
const { validateType } = require('../src/validation');

const isDataMissing  = (school) => !(school);
const isDataOfCorrectType = (school) => validateType(school, 'school', 'string');

const validateInput = (school) => {
  if (isDataMissing(school)) {
    console.error(`some inputs are missing`)
    return false ;
  }
  return isDataOfCorrectType(school);
};

//  -------------
//  Intern 
class Intern extends Employee {
  constructor (name, id, email, school) {
    super(name, id, email);
    if (!validateInput(school)) return {};

    this.school = school;
  }

  getRole () {
    return 'Intern';
  }

  getSchool() {
    return this.school;
  }
};


module.exports = Intern;