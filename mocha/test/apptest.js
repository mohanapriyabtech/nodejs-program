const assert = require('chai').assert;
 const app =require('../index')
// const sayHello= require('../index').sayHello;
// const addNumbers =require('../index').addNumbers;



      describe('App' ,function(){
      it('app should return hello',function(){
        assert.equal(app.sayHello(),'hello')
     });
    

//  describe('App' ,function(){
//     it('app should return hello',function(){
//        assert.equal(sayHello(),'hello')
//     });


    it('app should return type  string',function(){
        assert.typeOf(app.sayHello(),'string')
    });

    it('addNumbers should be above 5',function(){
        let result = app.addNumbers(5,5)
        assert.isAbove(result,5)
    });
});