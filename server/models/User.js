const { Schema, model } = require('mongoose');
const questionSchema = require('./Question');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim:true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function(v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: props => `${props.value} is not a valid email.address!`
      },
      required: [true, 'User email required'],
    },
    city: {
        type: String,
        required: true,
        trim:true
    },
    tech1: {
        type: String,
        required: true,
        trim:true
    },
    tech2:{
        type: String,
        required: true,
        trim:true
    },
    tech3:{
        type: String,
        required: true,
        trim:true
    },
    questions:[
        {
        type: Schema.Types.ObjectId,
        ref: 'Question',
        },
    ],
    followers: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Create a virtual property `followCount` that gets the number of followers per user
userSchema
  .virtual('followCount')
  // Getter
  .get(function () {
    return this.followers.length;
  });

const User = model('user', userSchema);

module.exports = User;
