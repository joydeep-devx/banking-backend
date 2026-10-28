const mogoose = require("mongoose");

const ledgerSchema = new mogoose.Schema({
  account: {
    type: mogoose.Schema.Types.ObjectId,
    ref: "Account",
    required: [true, "Ledger must be associated with an account."],
    index: true,
    immutable: true,
  },
  amount: {
    type: Number,
    required: [true, "Amount is required for creating a ledger entry."],
    immutable: true,
  },
  transaction: {
    type: mogoose.Schema.Types.ObjectId,
    ref: "transaction",
    required: [true, "Ledger must be associated with a transaction."],
    index: true,
    immutable: true,
  },
  type: {
    type: String,
    enum: {
      values: ["CREDIT", "DEBIT"],
      message: "Ledger type can either CREDIT or DEBIT.",
    },
    required: [true, "Ledger type is required "],
    immutable: true,
  },
});

function preventLedgerModification() {
  throw new Error("Ledger entries immutable and cannot be modified or deleted");
}

// 1. Catches updateOne, updateMany, findOneAndUpdate, findByIdAndUpdate
ledgerSchema.pre(/update/i, preventLedgerModification);

// 2. Catches deleteOne, deleteMany, findOneAndDelete, findByIdAndDelete, remove
ledgerSchema.pre(/delete/i, preventLedgerModification);

// 3. Catches replaceOne, findOneAndReplace
ledgerSchema.pre(/replace/i, preventLedgerModification);

const ledgerModel = mogoose.model("ledger", ledgerSchema);

module.exports = ledgerModel;
