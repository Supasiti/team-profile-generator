const Employee = require('../lib/employee');

describe('Employee', () =>{
  //  constructor
  describe('Init',() => {
    it ('should log an error if an argument is missing', () =>{
      const expected = {};

      
      const employee = new Employee()
      expect(employee).toBe(expected); 
      // expect(console.error).toBeCalledWith(console.error(`${name} must be of type ${type}`)) 

    })
  });

});