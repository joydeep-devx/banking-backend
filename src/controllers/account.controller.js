const accoutModel = require("../models/account.model.js");

async function createAccountController(req, res) {
  const user = req.user;

  const account = await accoutModel.create({
    user: user._id,
  });

  res.status(201).json({
    account
  });
}

async function getUserAccountsController(req, res) {
  const accounts = await accoutModel.find({ user: req.user._id });

  res.status(200).json({
    accounts
  });
}

module.exports = {
  createAccountController,
  getUserAccountsController
}