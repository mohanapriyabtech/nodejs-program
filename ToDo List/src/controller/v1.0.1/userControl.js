const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../../model/userSchema");
const jwt = require("jsonwebtoken");
const Task = require("../../model/taskSchema");
const sendMail =require("../../helper/mailFunction").sendMail
require("dotenv").config();

/*user registration with basic details without password*/
exports.signUp = async (req, res) => {

  const email = req.body.email;
  const fullName = req.body.fullName;
  const userName = req.body.userName;

  const user = await User.create({ email, fullName, userName })
    .then((user) => {

      console.log(" register completed");
      res.send(user);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

/**Login the appropriate with their E-mail alone
 * this version v1.0.1 password no need for login
 */
exports.logIn = async (req, res) => {

  try {
    const email = req.body.email;
    var otp = `${Math.floor(1000 + Math.random() * 9000)}`; //otp formula

    await User.findOneAndUpdate({ email: req.body.email }, { otp: otp })
      .then((user) => {
        // result stored in user variable

        if (user) {

          sendMail(email,otp)

          res.json({
            message: "we have sent a otp via Email",
          });

        } else {
          res.send(error);
        }
      })

      .catch((err) => {
        res.send(err.message);
      });

  } catch (error) {
    res.status(400).send("email is not matching");
  }
};


  


