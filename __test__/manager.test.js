const Manager = require('../lib/manager');

describe('Manager', () => {
  //  constructor
  describe('Init',() => {
    it ('should return an employee instance when a name, an id and an email is passed', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const officeNumber = '0412123123';
      
      const manager = new Manager(name, id, email, officeNumber);
      
      expect(manager.name).toEqual(name); 
      expect(manager.id).toEqual(id); 
      expect(manager.email).toEqual(email); 
      expect(manager.officeNumber).toEqual(officeNumber);
    });

    // it ('should log an error when incorrect data is passed', 
    // () =>{
    //   const name = 'thara';
    //   const id = '1';
    //   const email = 'thara@company.com';
    //   const expected = undefined;

    //   const mock = jest.spyOn(console, 'error');
    //   mock.mockImplementation( () => {});
    //   const employee = new Manager(name, id, email);
      
    //   expect(employee.name).toEqual(expected); 
    //   expect(employee.id).toEqual(expected); 
    //   expect(employee.email).toEqual(expected); 
    //   expect(mock).toHaveBeenLastCalledWith('id must be of type number');
    // });

    // it ('should log an error when data is missing', 
    // () =>{
    //   const name = 'thara';
    //   const id = '1';
    //   const email = 'thara@company.com';
    //   const expected = undefined;

    //   const mock = jest.spyOn(console, 'error');
    //   mock.mockImplementation( () => {});
    //   const employee = new Manager(name, id);
      
    //   expect(employee.name).toEqual(expected); 
    //   expect(employee.id).toEqual(expected); 
    //   expect(employee.email).toEqual(expected); 
    //   expect(mock).toHaveBeenLastCalledWith('some inputs are missing');
    // });
  });
});