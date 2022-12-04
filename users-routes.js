const express = require("express");
const router = express.Router();

const UserModel = require("../models/UserModel.js");

router.post("/registration", function (req, res) {
  let newDocument = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    subscribe: req.body.subscribe,
  };

  UserModel.create(newDocument)
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/registration error", error);

      res.send("An error occured");
    });
});

router.post("/find", 
function (req, res) {
  UserModel.find({
    //"firstName": req.body.firstName
  })
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/find error", error);
      res.send("An error occured");
    });
});

router.put("/update", 
function (req, res) {
  let newDocument = {};

  if (req.body.firstName) {
    newDocument["firstName"] = req.body.firstName;
  }
  if (req.body.lastName) {
    newDocument["lastName"] = req.body.lastName;
  }
  if (req.body.phone) {
    newDocument["phone"] = req.body.phone;
  }
 

  UserModel.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: newDocument,
    },
    {
      new: true,
    }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/users/update error", error);
      res.send("An error occured");
    });
});

router.put("/preferences", 
function (req, res) {
  let newDocument = {};

  if (req.body.subscribe) {
    newDocument["subscribe"] = req.body.subscribe;
  }

  UserModel.findOneAndUpdate(
    {
      email: req.body.email,
    },
    {
      $set: newDocument,
    },
    {
      new: true,
    }
  )
    .then(function (dbDocument) {
      res.json(dbDocument);
    })
    .catch(function (error) {
      console.log("/users/preferences error", error);
      res.send("An error occured");
    });
});

module.exports = router;
