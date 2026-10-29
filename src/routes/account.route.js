const express = require("express");
const authMiddleware = require("../middleware/auth.middleware.js");
const accountController = require("../controllers/account.controller.js");

const router = express.Router();

/**
 * - POST /api/accounts
 * - Create a new account
 * - Protected route
 */
router.post(
  "/",
  authMiddleware.authMiddleware,
  accountController.createAccountController,
);

/**
 * - GET /api/accounts
 * - Get all accounts of the logged-in user
 * - Protected route
 */

router.get(
  "/",
  authMiddleware.authMiddleware,
  accountController.getUserAccountsController,
);

/**
 * - GET /api/accounts/balance/:accountId
 * - Get the balance of the logged-in user's account
 * - Protected route
 */
router.get(
  "/balance/:accountId",
  authMiddleware.authMiddleware,
  accountController.getAccountBalanceController,
);

module.exports = router;
