const { Schema, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// Schema to create Reaction model
const answerSchema = new Schema({
  answerId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  answerBody: {
    type: String,
    max_length: 280,
  },
  username: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
});

module.exports = answerSchema;
