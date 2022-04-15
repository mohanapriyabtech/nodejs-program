


const func1 = function() {
  setTimeout(() => console.log("timeout"), 0);
  setImmediate(() => console.log("immediate"));
  process.nextTick(() => console.log("nextTick"));
}

const func2 = function() {
  process.nextTick(() => console.log("nextTick-2"));
  setTimeout(() => console.log("timeout -2 minutes"), 2);
  setImmediate(() => console.log("immediate-2"));
}




func1()
func2()



    function cb1() {
    console.log("call another");
    }
    
    setTimeout(function cb1() {
    console.log("getting another")
    }, 0);
    setImmediate(cb1);
    process.nextTick(cb1);
    
    