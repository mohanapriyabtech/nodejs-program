const cron = require("node-cron");
const User = require("../../model/userSchema");
const Task = require("../../model/taskSchema");
const statusMail = require("../../helper/mailFunction").statusMail
const startDate = require("../../helper/time").startDate
const endDate = require("../../helper/time").endDate


// Task create function with userid
exports.taskCreate = async (req, res) => {

  const id = req.params.userid;

  await Task.create({
    task: req.body.task,
    taskDescription: req.body.taskDescription,

    tasksendBy: await User.findOne({ _id: id }, { new: true }),
  })
    .then(async result => {
      res.json({
        message: "Task created sucessfully",
        result,
      });
      
      await User.findOneAndUpdate({_id:id},{$push: { taskDetails: result._id }})
      console.log("Task created");
    })

    .catch((err) => {
      console.log(err.message);
    });
};

// Task edit function
exports.taskEdit = async (req, res) => {

  await Task.findByIdAndUpdate({ _id: req.params.taskid }, { $set: req.body })

    .then((task) => {
      if (task) {
        console.log(" Task edited successfully");
        res.status(200).send({ message: "Task Edited", task });
      } else {
        res.status(404).send({ message: "invalid id" });
      }
    })
    .catch((error) => {
      console.log(error.message);
      res.send(error.message);
    });
};

//  Task Delete function
exports.taskDelete = async (req, res) => {

  await Task.findByIdAndDelete({ _id: req.params.taskid }, { new: true })
    .then((task) => {
      if (!task) {
        res.status(404).send("Taskid not found");
      } else {
        console.log("user deleted successfully");
        res.status(200).send("Task deleted successfully.");
      }
    })
    .catch((errors) => {
      res.send(errors.message);
    });
};

// if the user finish the task change the status Completed
exports.taskCompleted = async (req, res) => {

  const taskid = req.params.taskid ;

  await Task.findByIdAndUpdate( { _id: taskid },{ $set: { status: "Completed" } },{ new: true })

    .then((result) => {
      if (result) {
        console.log(" Task Completed successfully");
        res.status(200).send({ message: "Task Completed", result});
      } else {
        res.send("invalid id");
      }
    })
    .catch((error) => {
      console.log(error.message);
      res.send(error.message);
    });
};

//find the user by task id 
exports.findUser = async (req, res) => {

  await Task.findOne({ _id: req.body.taskid }).populate('tasksendBy',['task','status','userName','fullName','email'])

    .then((result) => {
    
      res.json({
        message: "user details here",
      result

      });
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
};


/** View the Date wise Task  -if we give the Date in body(yyyy-mm-dd),
 * 
We get that day task list,else we get  Today's Task list  **/

exports.todayTask = async (req, res) => {

  var getDate = req.body.date;

  if (getDate) {
    var start_date = getDate + "T00:00:00.000Z";
    var end_date = getDate + "T23:59:59.000Z";

    await Task.find({ createdAt: { $gte: start_date, $lt: end_date }})
    .then(task => {
      res.json({
        message:"task details here",
        task 
      })
      console.log(task);
     })
     .catch(err=>{
       res.send(err.message)
     })
  
  } else {

     await Task.find({ createdAt: { $gte: startDate, $lt: endDate }})
    .then(todayTask=>{

      res.json({
        message:"task details here",
        todayTask 
      })
    })
     .catch(err=>{
       res.send(err.message)
     })
    
  }
};

// comment the task by userid and taskid
exports.taskComment = async (req, res) => {

 
  const userid = req.params.userid; 
  const taskid = req.params.taskid;

  await Task.findById({ _id:taskid })

    .then(async result => {
      console.log(result)
      
      if (result.tasksendBy == userid && result._id == taskid)  {

       await Task.findOneAndUpdate( { _id: taskid },{ $set: { comment: req.body.comment } },{new:true})
        .then(comment => {

          res.json({
          message: "comment updated sucessfully",
          comment,
         });
        })
      
      }

      else {
        res.json({
          message: "wrong userid or taskid",
        });

      } 
    })

    .catch((err) => {
      res.send(err.message);
    })
};


/* Mail Notification send on particular time*/

exports.mailSend = async (req, res) => {
  
  
    
  await Task.find({createdAt: { $gte: startDate, $lt: endDate }}).populate("tasksendBy")

     .then((result) => {
    
       if(result.length == 0){ 

          console.log("Tasks not updated today")
        }

        else {

        cron.schedule(" * * * * * ", () => {     // E-mail schedule  at 9.00 pm
          
        for (var e in result) {
          
          const userEmail = result[e].tasksendBy.email;
          const fullName = result[e].tasksendBy.fullName;
          const task = result[e].task;
          const taskStatus = result[e].status;
  
          statusMail(userEmail,fullName,task,taskStatus)
          
          console.log(userEmail)
           
        }
            res.send("EOD Mail sent to All")
        });
      
        }

      })
      .catch (error => {
         console.log(error.message);
         res.send(error.message);
       })

};

exports.check = async (req, res) => {

  var user = await User.find({taskDetails: {$exists:true,$not:{$size:0}}}).populate("taskDetails")
  // const a = user.taskDetails.filter(item=>item.createdAt == { $gte: startDate, $lt: endDate });
  //  console.log(user)
  //   console.log(user)
   const emailList = user.map(x => x.taskDetails.task)
  //  console.log(emailList)
   

    //var surname = 1;
    var i,x ="";
    for(i in user)
    {
      var id = user[i].taskDetails._id;
        
  // console.log(id);
  
    }
     
    await Task.find({createdAt: { $gte: startDate, $lt: endDate }}).populate("tasksendBy")

    .then((result) => {
      res.send(result)
      console.log(result)})
   
}

 
  

    
      //  if(result.length == 0){ 

      //     console.log("Tasks not updated today")
      //   }

      //   else {

      //   cron.schedule(" * * * * * ", () => {     // E-mail schedule  at 9.00 pm
          
      //   for (var e in result) {
          
      //     const userEmail = result[e].tasksendBy.email;
      //     const fullName = result[e].tasksendBy.fullName;
      //     const task = result[e].task;
      //     const taskStatus = result[e].status;
  
      //     statusMail(userEmail,fullName,task,taskStatus)
          
      //     console.log(userEmail)
           
      //     }
      //       res.send("EOD Mail sent to All")
      //   });
      
      //   }

      
      // .catch (error => {
      //    console.log(error.message);
      //    res.send(error.message);
      //  })

  
// }