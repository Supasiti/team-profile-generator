const {validateType} = require('../src/validation');

describe('validateType', () =>{
  it ('should log an error if the type of an object is not the right one', () => {
    const mock = jest.spyOn(console, 'error');
    mock.mockImplementation(() => {});
    
    const result = validateType("hello", "hello", "number"); 

    expect(mock).toBeCalledWith('hello must be of type number')
    expect(result).toEqual(false);
  });

  it ('should return true if the type of an object is correct', () => {
    const result = validateType("hello", "hello", "string"); 
    
    expect(result).toEqual(true);
  });


  it ('should log an error if the type is email but does not have @ sign', () => {
    const mock = jest.spyOn(console, 'error');
    mock.mockImplementation(() => {});
    
    const result = validateType("hello", "hello", "email"); 

    expect(mock).toBeCalledWith('hello must be of type email')
    expect(result).toEqual(false);
  });

  it ('should log an error if the type is phone but have a letter', () => {
    const mock = jest.spyOn(console, 'error');
    mock.mockImplementation(() => {});
    
    const result = validateType("h 30 30", "hello", "phone"); 

    expect(mock).toBeCalledWith('hello must be a phone number')
    expect(result).toEqual(false);
  });
});