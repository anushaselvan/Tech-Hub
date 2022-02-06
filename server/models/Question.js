const { Schema, model } = require('mongoose');
//const { Question } = require('.');
const answerSchema = require('./Answer');

// Schema to create Question model
const questionSchema = new Schema(
  {
    questionText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
    active: {
      type: Boolean,
      required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    username:
        {
        type: String,
        required: true,
        },
    answers: [answerSchema],
  },
/* {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }*/
);


// Create a virtual property `answerCount` that gets the number of answers per question
questionSchema
  .virtual('answerCount')
  // Getter
  .get(function () {
    return this.answers.length;
  });

const Question = model('Question', questionSchema);

module.exports = Question;
