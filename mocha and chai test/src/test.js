const assert = require('chai').assert;
const index = require("./index");
 
describe("Index Tests", function(){
 
    describe("Addition", function(){
        it("Addition functionality test", function() {
            let result = index.add(4,5);
            assert.equal(result,9);
        });
        it("Addition return type test", function() {
            let result = index.add(4,5);
            assert.typeOf(result,'number');
        });
    });
 
    describe("Subtraction", function(){
        it("Subtraction functionality test", function() {
            let result = index.subtract(5,4);
            assert.equal(result,1);
        });
        it("Subtraction return type test", function() {
            let result = index.subtract(5,4);
            assert.typeOf(result,'number');
        });
    });   
 
});