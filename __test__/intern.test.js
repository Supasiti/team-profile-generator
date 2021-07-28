const Intern = require('../lib/intern');

describe('Intern', () => {
  
  //  constructor
  describe('Init',() => {
    it ('should return an employee instance when a name, an id and an email is passed', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const school = 'University of Melbourne'
      
      const intern = new Intern(name, id, email, school);
      
      expect(intern.name).toEqual(name); 
      expect(intern.id).toEqual(id); 
      expect(intern.email).toEqual(email); 
      expect(intern.school).toEqual(school);
    });

    it ('should log an error when incorrect data is passed', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const school = 1;
      const expected = undefined;

      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation( () => {});
      const intern = new Intern(name, id, email, school);
      
      expect(intern.name).toEqual(expected); 
      expect(intern.id).toEqual(expected); 
      expect(intern.email).toEqual(expected); 
      expect(intern.school).toEqual(expected); 
      expect(mock).toHaveBeenLastCalledWith('\nschool must be of type string');
    });

    it ('should log an error when data is missing', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const expected = undefined;

      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation( () => {});
      const intern = new Intern(name, id, email);
      
      expect(intern.name).toEqual(expected); 
      expect(intern.id).toEqual(expected); 
      expect(intern.email).toEqual(expected); 
      expect(intern.school).toEqual(expected); 
      expect(mock).toHaveBeenLastCalledWith('some inputs are missing');
    });
  });

  // getRole
  describe('getRole', () => {
    it ('should return "Intern"', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const school = 'University of Melbourne';
      const expected = 'Intern';

      const intern = new Intern(name, id, email, school);
      const result = intern.getRole();

      expect(result).toEqual(expected); 
    });
  });

  // getSchool
  describe('getSchool', () => {
    it ('should return the intern\'s school', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const school = 'University of Melbourne';
      const expected = 'University of Melbourne';

      const intern = new Intern(name, id, email, school);
      const result = intern.getSchool();

      expect(result).toEqual(expected); 
    });
  });
});