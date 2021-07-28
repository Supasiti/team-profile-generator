const Engineer = require('../lib/engineer');

describe('Engineer', () => {
  
  //  constructor
  describe('Init',() => {
    it ('should return an employee instance when a name, an id and an email is passed', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const github = 'supasiti';
      
      const engineer = new Engineer(name, id, email, github);
      
      expect(engineer.name).toEqual(name); 
      expect(engineer.id).toEqual(id); 
      expect(engineer.email).toEqual(email); 
      expect(engineer.github).toEqual(github);
    });

    it ('should log an error when incorrect data is passed', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const github = 1;
      const expected = undefined;

      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation( () => {});
      const engineer = new Engineer(name, id, email, github);
      
      expect(engineer.name).toEqual(expected); 
      expect(engineer.id).toEqual(expected); 
      expect(engineer.email).toEqual(expected); 
      expect(engineer.github).toEqual(expected); 
      expect(mock).toHaveBeenLastCalledWith('\ngithub must be of type string');
    });

    it ('should log an error when data is missing', 
    () =>{
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const expected = undefined;

      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation( () => {});
      const engineer = new Engineer(name, id, email);
      
      expect(engineer.name).toEqual(expected); 
      expect(engineer.id).toEqual(expected); 
      expect(engineer.email).toEqual(expected); 
      expect(engineer.github).toEqual(expected); 
      expect(mock).toHaveBeenLastCalledWith('some inputs are missing');
    });
  });

  // getRole
  describe('getRole', () => {
    it ('should return "Engineer"', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const github = 'supasiti';
      const expected = 'Engineer';

      const engineer = new Engineer(name, id, email, github);
      const result = engineer.getRole();

      expect(result).toEqual(expected); 
    });
  });

  // getGithub
  describe('getGithub', () => {
    it ('should return the engineer\'s github', () => {
      const name = 'thara';
      const id = 1;
      const email = 'thara@company.com';
      const github = 'supasiti';
      const expected = 'supasiti';

      const engineer = new Engineer(name, id, email, github);
      const result = engineer.getGithub();

      expect(result).toEqual(expected); 
    });
  });
});