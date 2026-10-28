const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Account must associated wiht a user."],
    index: true,
  },
  status: {
    type: String,
    enum: {
      values: ["ACITVE", "FROZEN", "CLOSED"],
      message: "Account status can only be ACTIVE, FROZEN or CLOSED.",
      default: "ACTIVE",
    },
  },
  currency: {
    type: String,
    required: [true, "Currency is required for an account."],
    deafult: "INR",
  }
},{
  timestamps: true,
});

accountSchema.index({ user: 1, status: 1 });

const accountModel = mongoose.model("account", accountSchema);

module.exports = accountModel;
