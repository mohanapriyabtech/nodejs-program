var express =require("express");
    
var mongoose = require("mongoose");

const route = require("../src/router/router");


const app= express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));


mongoose.connect("mongodb://localhost/instadb");
var db = mongoose.connection;

db.on('error',()=>console.log("error in connecting database"));
db.once('open',()=>console.log("conneted to database"));


app.use('/user', route)   //routing url






// // register page -post method
// app.post('/registerpage',async(req,res)=>{ 

//     const details = req.body ;

//     const user =await schema.create(details)  
    
//    .then((user)=>{res.send(user);
//     console.log(" register completed");
//    })
//     .catch((errors)=>{res.send(errors.message)});


// // });

// // update user details-patch method
// app.patch('/user/:id',async(req,res)=>{ 


//     const id =req.params.id;

//     const update = await schema.findOneAndUpdate({id:id},{$set:req.body})
  
//     .then((update)=>{res.send(update);
   
//         console.log(" updated");
//    })
//     .catch((errors)=>{res.send(errors.message)});

// });

// // delete the user details
// app.delete('/del/:id',async(req,res)=>{
//     const id= req.params.id;
    
//     const details = req.body ;

//   const update = await schema.deleteOne({id:id})
  
//     .then((update)=>{res.send(update);
   
//         console.log(" updated");
//    })
//     .catch((errors)=>{res.send(errors.message)}); 
// });


// // search the user details

// app.post('/:name',async(req,res)=>{ 

// const name = req.params.name;

// const details = req.body ;

// const finduser = await schema.findOne({name:req.body.name})

// .then((finduser)=>{res.send(finduser);

//     console.log(finduser);
// })
// .catch((errors)=>{res.send(errors.message)});
// });




app.listen(7000,() =>{
console.log("listening  on port 7000");

});


