const mongoose = require("mongoose");
const userSchema = require("../../model/userSchema");
const sendMail = require("../../helper/mailFunction").sendMail;

/*user registration with basic details without password*/
exports.signUp = async (req, res) => {
  const email = req.body.email;
  const fullName = req.body.fullName;
  const userName = req.body.userName;

  const user = await userSchema
    .create({ email, fullName, userName })
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

    await userSchema
      .findOneAndUpdate({ email: req.body.email }, { otp: otp })
      .then((user) => {
        // result stored in user variable

        if (user) {
          sendMail(email, otp);

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

/**Update the User details by calling with their id */

exports.updateUser = async (req, res) => {
  const body = req.body;
  const userid = req.params.userid;

  const user = await userSchema.findByIdAndUpdate(
    { _id: userid },
    { $set: req.body },
    { new: true }
  );
  if (user) {
    console.log("user updated successfully");
    res
      .status(200)
      .send({ message: "user details updated", updatedDetails: user });
  } else {
    res.status(404).send({ message: "user does not exist " });
  }
};
