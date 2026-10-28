const express = require("express");
const authMiddleware = require("../middleware/auth.middleware.js");
const transactionController = require("../controllers/transaction.controller.js");
const router = require("express").Router();

/**
 * - POST /api/transaction
 * - Create a new transaction
 * - Protected route
 */
router.post(
  "/",
  authMiddleware.authMiddleware,
  transactionController.createTransaction,
);

/**
 * - POSt /api/transaction/system/initial-fund
 * - Create a new initial funds transaction for system user
 */
router.post("/system/initial-fund",
  authMiddleware.authSystemUserMiddleware,
  transactionController.createInitialFundTransaction,
);

module.exports = router;
