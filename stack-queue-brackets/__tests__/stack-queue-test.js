const validateBrackets = require("../stack-queue-brackets");

describe("isValid test", () => {
  it("enqueue test", () => {
    
   
    expect(validateBrackets('()')).toBeTruthy();
    expect(validateBrackets('[]')).toBeTruthy();
    expect(validateBrackets('{}')).toBeTruthy();
    expect(validateBrackets('ae{s}e')).toBeFalsy();
    expect(validateBrackets('{')).toBeFalsy();
    expect(validateBrackets('[}')).toBeFalsy();
    expect(validateBrackets(')')).toBeFalsy();

  });

});