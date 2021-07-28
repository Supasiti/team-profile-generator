const { validateType } = require('../src/validation');
const Employee = require('./employee');

const isDataMissing  = (officeNumber) => !(officeNumber);
const isDataOfCorrectType = (officeNumber) => validateType(officeNumber, 'officeNumber', 'number');

const validateInput = (officeNumber) => {
  if (isDataMissing(officeNumber)) {
    console.error(`some inputs are missing`)
    return false ;
  }
  return isDataOfCorrectType(officeNumber);
};

//  -------------
//  Manager 
class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super(name, id, email);
    if (!validateInput(officeNumber)) return {};

    this.officeNumber = officeNumber;
  }

  getRole () {
    return 'Manager';
  }
};


module.exports = Manager;