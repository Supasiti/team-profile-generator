const Employee = require('../lib/employee');

describe('Employee', () =>{

  //  constructor
  describe('Init',() => {
    it ('should return an employee instance when a name, an id and an email is passed', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      
      const employee = new Employee(name, id, email);
      
      expect(employee.name).toEqual(name); 
      expect(employee.id).toEqual(id); 
      expect(employee.email).toEqual(email); 
    });

    it ('should log an error when incorrect data is passed', 
    () =>{
      const name = 'thara';
      const id = '1';
      const email = 'thara';
      const expected = undefined;

      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation( () => {});
      const employee = new Employee(name, id, email);
      
      expect(employee.name).toEqual(expected); 
      expect(employee.id).toEqual(expected); 
      expect(employee.email).toEqual(expected); 
      expect(mock).toHaveBeenLastCalledWith('email must be of type email');
      mock.mockRestore();
    });

    it ('should log an error when data is missing', 
    () =>{
      const name = 'thara';
      const id = '1';
      const email = 'thara@company.com';
      const expected = undefined;

      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation( () => {});
      const employee = new Employee(name, id);
      
      expect(employee.name).toEqual(expected); 
      expect(employee.id).toEqual(expected); 
      expect(employee.email).toEqual(expected); 
      expect(mock).toHaveBeenLastCalledWith('some inputs are missing');
      mock.mockRestore();
    });
  });

  // get Name
  describe('getName', () => {
    it ('should return an employee\'s name', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      
      const employee = new Employee(name, id, email);
      const result = employee.getName();

      expect(result).toEqual(name); 
    });
  });

  //  getId
  describe('getId', () => {
    it ('should return an employee\'s id', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      
      const employee = new Employee(name, id, email);
      const result = employee.getId();

      expect(result).toEqual(id); 
    });
  });

  // getEmail
  describe('getEmail', () => {
    it ('should return an employee\'s email', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      
      const employee = new Employee(name, id, email);
      const result = employee.getEmail();

      expect(result).toEqual(email); 
    });
  });

  // getRole
  describe('getRole', () => {
    it ('should return "Employee"', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const expected = 'Employee';

      const employee = new Employee(name, id, email);
      const result = employee.getRole();

      expect(result).toEqual(expected); 
    });
  });
});