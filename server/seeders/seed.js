const db = require("../config/connection");
const { User } = require("../models");
const { Question } = require("../models");

const questionSeeds = require("./questionSeeds.json");

db.once("open", async () => {
  await User.create({
    username: "Washington",
    email: "yyy@test.com",
    password: "pass12345",
  });

  await User.create({
    username: "Holt",
    email: "ttt@test.com",
    password: "pass12345",
  });

  console.log("users seeded");

  // await Thought.deleteMany({});
  await Question.create(questionSeeds);

  console.log("all done!");
  process.exit(0);
});
