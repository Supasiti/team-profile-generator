const { validateType } = require('../src/validation');

const isDataMissing  = (name, id, email) => { return !(name && id && email)};

const isDataOfCorrectType = (name, id, email) => {
  return validateType(name, 'name', 'string') &&
  validateType(id, 'id', 'number') &&
  validateType(email, 'email', 'email')
};

const validateInput = (name, id, email) => {

  if (isDataMissing(name, id, email)) {
    console.error(`some inputs are missing`)
    return false ;
  }

  if (!isDataOfCorrectType(name, id, email)) return false;
  return true;
};

//-------------------------
// Employee class
class Employee {
  constructor (name, id, email){
    if (!validateInput(name, id, email)) return;

    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee