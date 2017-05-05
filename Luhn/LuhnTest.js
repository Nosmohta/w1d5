var assert = require("chai").assert;
var luhn = require("./luhn.js");

describe("Luhn Algorithym", function() {
  it("should return false is a Letter is given", function() {
    var number = "2344s3" ;
    var result = luhn.check(number);
    assert.isFalse(result);
  });

  it("should return true if only numbers are given", function() {
    var number = "79927398713" ;
    var result = luhn.check(number);
    assert.isTrue(result);
  });

  it("should return false if the last bumber given is wrong", function() {
    var number = "79927398714" ;
    var result = luhn.check(number);
    assert.isFalse(result);
  });

  it("should return false if the last character given is a letter", function() {
    var number = "23442347r" ;
    var result = luhn.check(number);
    assert.isFalse(result);
  });


});