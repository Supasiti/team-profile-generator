const {validateType} = require('../src/validation');

describe('validateType', () => {

  // test default
  describe('validateDefault', () => {
    it ('should log an error if the type of an object is not the right one', () => {
      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});
      
      const result = validateType(1, "hello", "string"); 

      expect(mock).toBeCalledWith('\nhello must be of type string')
      expect(result).toEqual(false);
    });

    it ('should return true if the type of an object is correct', () => {
      const result = validateType("hello", "hello", "string"); 
      
      expect(result).toEqual(true);
    });
  });
  
  // test number
  describe('validateNumber', () => { 
    it ('should log an error it is not a number', () => {
      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});
      
      const result = validateType("hello", "hello", "number"); 

      expect(mock).toBeCalledWith('\nhello must be a number')
      expect(result).toEqual(false);
    });

    it ('should return true it is a number', () => {
      const result = validateType(239, "hello", "number"); 

      expect(result).toEqual(true);
    });
  });
  
  // test email
  describe('validateEmail', () => { 
    it ('should log an error if the type is email but does not have @ sign', () => {
      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});
      
      const result = validateType("hello", "hello", "email"); 

      expect(mock).toBeCalledWith('\nhello must be of type email')
      expect(result).toEqual(false);
    });

    it ('should return true it is an email', () => {
      const result = validateType("test@example.com", "hello", "email"); 

      expect(result).toEqual(true);
    });
  });
  

  // test phone
  describe('validatePhone', () => {
    it ('should log an error if the type is phone but have a letter', () => {
      const mock = jest.spyOn(console, 'error');
      mock.mockImplementation(() => {});
      
      const result = validateType("h 30 30", "hello", "phone"); 

      expect(mock).toBeCalledWith('\nhello must be a phone number')
      expect(result).toEqual(false);
    });

    it ('should return true it is a phone number', () => {
      const result = validateType("0430 302 234", "hello", "phone"); 

      expect(result).toEqual(true);
    });
  });
});