const express = require("express");
const collection = require("../model/collection");
const admin = require("../models/admin");

/*when collections created its pending for admin app */
exports.requestpending = async (req, res, next) => {
  await admin
    .find()
    .then((user) => {
      console.log(user), res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
//create collection accecpted
exports.requestaccept = async (req, res) => {
  const data = await admin.findOneAndDelete({ _id: req.params.id });
  await collection
    .create({
      name: data.name,
      creatorName: data.creatorName,
      collectionImage: data.collectionImage,
      status: true,
      owner: data.owner,
    })
    .then((user) => {
      console.log(user), res.send("collection accepted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
};

//delete collection rejected

exports.reject = async (req, res) => {
  await admin
    .findOneAndDelete({ _id: req.params.id })

    .then((user) => {
      console.log(user), res.send("collection rejected");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
};
