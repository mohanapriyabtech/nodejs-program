const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
const User = require("../../model/userschema");
const Task = require("../../model/taskschema");

// Task create function with userid
exports.taskcreate = async (req, res) => {
  const id = req.params.userid;

  await Task.create({
    task: req.body.task,
    taskDescription: req.body.taskDescription,

    tasksendBy: await User.findOne({ _id: id }, { new: true }),
  })
    .then((result) => {
      res.json({
        message: "Task created sucessfully",
        result,
      });

      console.log(result);
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
  
  await Task.findByIdAndUpdate(
    { _id: req.params.taskid },
    { $set: { status: "Completed" } },
    { new: true }
  )

    .then((task) => {
      if (task) {
        console.log(" Task Completed successfully");
        res.status(200).send({ message: "Task Edited", task });
      } else {
        res.send("invalid id");
      }
    })
    .catch((error) => {
      console.log(error.message);
      res.send(error.message);
    });
};


//find the user by task
exports.finduser = async (req, res) => {
  await Task.findByIdAndUpdate(
    { _id: req.params.taskid },
    {
      $set: { tasksendBy: await User.find({ taskDetails: req.params.taskid }) },
    }
  );
  await Task.find({ _id: req.params.taskid })
    .populate("tasksendBy")

    .then((result) => {
      res.json({
        message: "user details here",
        result,
      });
      console.log(result);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

//
exports.viewbydate = async (req, res) => {
  await Task.find({ UpdatedAt: req.params.date }, { new: true })
    .populate("task")
    .populate("status")
    .then((result) => {
      res.json({
        message: "task details here",
        result,
      });
      console.log(result);
    })

    .catch((err) => {
      console.log(err.message);
    });
};


// comment the task by userid and taskid
exports.taskcomment = async (req, res) => {
  const taskid = req.params.taskid;
  const userid = req.params.userid;

  await User.findOne({ _id: userid });
  await Task.create({
    taskdetails: await Task.findOne({ _id: taskid }),
    comment: req.body.comment,
    commentby: await User.findOne({ _id: userid }, { new: true }),
  })

    .then((result) => {
      res.json({
        message: "comment updated sucessfully",
        result,
      });
      console.log(result);
    })

    .catch((err) => {
      console.log(err.message);
    });
};

/* Mail Notification send on particular time*/
exports.mailsend = async (req, res) => {
  try {
    const task = await Task.find().populate("tasksendBy");
    const taskemail = task.map((item) => item.tasksendBy.email);
    console.log(taskemail);
    const taskdetail = task.map((item) => item.status);
    const today = new Date(time);
    const time=new Date()((new Date),setHours(0,0,0,0)).getTime();
    const tomorrow = new Date(today.getDate() + 1);
    switch(filterBy){
      case 'past':
        return {
          $exists :true,
          $lt :today,
        }
        default:
          return {
            $exists :true,
            $lt :today,
          }

    }
    const users = await Task.find({
    UpdatedAt:getDateQuery('past')
    })
    console.log(users)
    
    const result = await Task.find()
      .populate("tasksendBy")

      .then((result) => {
        setTimeout(() => {                           // time schedule
          //  cron.schedule( '00 32 21 * * * ' ,()=>{  // time schedule
          let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "mohanaspark0105@gmail.com",
              pass: "xabqycrzwjarmooq",
            },
          });
          for (let e in result) {
            if (result[e].status == "pending") {
              const mailOptions = {
                from: "mohanaspark0105@gmail.com",
                to: result[e].tasksendBy.email,
                subject: "Task Status Report",
                html: `<p> Dear ${result[e].tasksendBy.fullname} ,</n>Your Task Topic is <b>${result[e].task}</b>.
                </n>Your Task status is<b> ${result[e].status}</b> </p>`,
              };

              mailTransporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return console.log(error);
                }
                console.log("Message sent:");
                res.send(
                  "Notification E-mail sent To:" + result[e].tasksendBy.email
                );
              });
            } else {
              const mailOptions = {
                from: "mohanaspark0105@gmail.com",
                to: result[e].tasksendBy.email,
                subject: "Task Status Report",
                html: `<p> Dear ${result[e].tasksendBy.fullname} ,</n>Your Task Topic is <b>${result[e].task}</b>.
                </n>Your Task status is<b> ${result[e].status}</b> </p>`,
              };

              mailTransporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return console.log(error);
                }
                console.log("Message sent:");
                res.send(
                  "Notification E-mail sent To:" + result[e].tasksendBy.email
                );
              });
            }
          }

          500;
        });
      });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
