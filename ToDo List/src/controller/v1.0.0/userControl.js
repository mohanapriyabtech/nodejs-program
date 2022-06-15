const bcrypt = require("bcrypt");
const User = require("../../model/userSchema");
const jwt = require("jsonwebtoken");
const Task = require("../../model/taskSchema");
const sendMail =require("../../helper/mailFunction").sendMail
require("dotenv").config();

/*user registration with basic details*/
exports.signUp = async (req, res) => {

  const email = req.body.email;
  const fullName = req.body.fullName;
  const userName = req.body.userName;
  const password = req.body.password;
  
  const salt =await bcrypt.genSalt(10);
  const hashedpassword=await bcrypt.hash(password,salt)
  this.password = hashedpassword;

  const user = await User.create({ email, fullName, userName, password })
    .then((user) => {

       console.log(" register completed");
       res.send(user);
    })                           
    .catch((err) => {
      res.send(err.message);
    });
};

/**Login the appropriate with their E-mail and Password
 * Password has been securely stored with bcrypt method
 */
exports.logIn = async (req, res) => {

  try {

    const email = req.body.email;
    const password = req.body.password;

    var otp = `${Math.floor(1000 + Math.random() * 9000)}`; //otp formula

    await User.findOneAndUpdate({ email: email }, { otp: otp })
      .then((user) => {
        // result stored in user variable
        bcrypt.compare(password, user.password);
        if (user) {
           
            sendMail(email,otp) 
            res.json({
              message: "we have sent a otp via Email"
       });
              
        } else {
          res.send(error);
        }
      
    })
      .catch((err) => {
        res.send(err.message);
      });
  } catch (error) {
    res.status(400).send("password not matching");
  }
};

// otp verification for particular Email id

exports.otpVerify = async (req, res) => {

  await User.findOne({ email: req.body.email })
  .then((user) => {

    if (user.otp == req.body.otp) {

       User.findOneAndUpdate({ email: req.body.email },{ $set:{otp: 0 } })
       
       const token = jwt.sign({ email: user.email }, "secretkey", {
        algorithm: "HS256",
        expiresIn: "5h",
      });
      return res.status(200).json({
        message: "login success",
        token: "bearer " + token,
      });
    } else{
      res.send("incorrect otp ")
    }
  
  });
};

/**Update the User details by calling with their id */

exports.updateUser = async (req, res) => {

  await User.findByIdAndUpdate({ _id: req.params.userid }, { $set: req.body })
    .then((user) => {

      if (user) {
        console.log("user updated successfully");
        res.status(200).send({ message: "user details updated", user });
      }
       else {
        res.status(404).send({ message: "invalid userid" });
      }
    })
    .catch((error) => {
      console.log(error.message);
      res.send(error.message);
    });
};

/**To delete User with their -id */

exports.deleteUser = async (req, res) => {

  await User.findByIdAndDelete({ _id: req.params.userid }, { new: true })
    .then((user) => {
      
      if (!user) {
        res.status(400).send(req.params.userid + " was not found");
      } 
      else {
        console.log("user deleted successfully");
        res.status(200).send(req.params.userid + " was deleted.");
      }
    })
    .catch((errors) => {
      res.send(errors.message);
    });
};

//find the task details by user

exports.findTask = async (req, res) => {

  const userid =req.params.userid ;

  await User.findByIdAndUpdate({ _id: userid },{$set: { taskDetails: await Task.find({ tasksendBy: req.params.userid })}},{ new : true });
  
  await User.find({ _id: userid }).populate("taskDetails")
    .then((user) => {
       if(user){
      
         res.json({message:"task details here",
          user,
        });
        console.log(user);
      } else {
        res.send("invalid userid");
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};
