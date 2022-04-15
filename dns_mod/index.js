var express = require('express');
var assert = require('assert');


assert.ok(50<70, "My message goes here");  // testing purpose only

// assert.strictEqual(50, 50); 


// dns module inside the express
var app =express();

console.log("hi");

var dns = require('dns');
dns.lookup('www.google.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  
dns.lookup('www.w3schools.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  
dns.lookup('www.sparkouttech.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  
