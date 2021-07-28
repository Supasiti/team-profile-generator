const { validateType } = require('../src/utils'); 

class Employee {
  constructor (name, id, email){
    if (
      validateType(name, 'name', 'string') || 
      validateType(id, 'id', 'number') || 
      validateType(email, 'email', 'string') 
    ) {
      return    
    }

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