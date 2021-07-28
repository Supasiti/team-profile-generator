const { validateType } = require('../src/validation');
const Employee = require('./employee');

const isDataMissing  = (name, id, email, phone) => { 
  return !(name && id && email && phone)
};

const isDataOfCorrectType = (name, id, email, phone) => {
  return validateType(name, 'name', 'string') &&
  validateType(id, 'id', 'number') &&
  validateType(email, 'email', 'email') && 
  validateType(phone, 'phone', 'phone')
};

const validateInput = (name, id, email, phone) => {
  if (isDataMissing(name, id, email, phone)) {
    console.error(`some inputs are missing`)
    return false ;
  }
  if (!isDataOfCorrectType(name, id, email, phone)) return false;
  return true;
};

//  -------------
//  Manager 
class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    if (!validateInput(name, id, email, officeNumber)) return;
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
};


module.exports = Manager;