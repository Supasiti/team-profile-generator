const {validateType} = require('../src/utils');

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

});