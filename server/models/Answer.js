const { Schema, Types } = require('mongoose');

// Schema to create Reaction model
const answerSchema = new Schema(
  {
    answerId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    answerBody: {
        type: String,
        required: true,
        max_length: 280,
    },
    username:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

module.exports = answerSchema;
