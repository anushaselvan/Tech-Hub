const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const questionSchema = require("./Question");

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email.address!`,
      },
      required: [true, "User email required"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    city: {
      type: String,
      trim: true,
    },
    tech1: {
      type: String,
      trim: true,
    },
    tech2: {
      type: String,
      trim: true,
    },
    tech3: {
      type: String,
      trim: true,
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  }
  /*{
    toJSON: {
      virtuals: true,
    },
    id: false,
  }*/
);

// Create a virtual property `followCount` that gets the number of followers per user
userSchema
  .virtual("followCount")
  // Getter
  .get(function () {
    return this.followers.length;
  });

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
