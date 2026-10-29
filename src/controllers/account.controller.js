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

/**
 * - Retrieve the balance of a specific account 
 */
async function getAccountBalanceController(req, res) {
  const { accountId } = req.params;

  const account = await accoutModel.findOne({ _id: accountId, user: req.user._id });

  if(!account) {
    return res.status(404).json({
      message: "Account not found"
    });
  }

  const balance = await account.getBalance();

  res.status(200).json({
    accountId: account._id,
    balance
  });
}

module.exports = {
  createAccountController,
  getUserAccountsController,
  getAccountBalanceController
}