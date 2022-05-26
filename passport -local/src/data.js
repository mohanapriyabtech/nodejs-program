let users=[
    {id: 1,username:"John", password:"john", role:"customer"},
    {id: 2,username:"Priya", password:"priya", role:"admin"},
];

let orders=[
    {orderId: 1, userId: 1,qty: 10,value: 75 },
    {orderId: 2, userId: 2,qty: 15,value: 55 },

];
module.exports = { users, orders };