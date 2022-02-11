const mongoose = require("mongoose");
console.log("connection:", mongoose.connection.readyState);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/techhub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
  // useFindAndModify: false
});
console.log("connection:", mongoose.connection.readyState);

module.exports = mongoose.connection;
