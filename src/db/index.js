const { connect } = require("mongoose");

const uri = "mongodb+srv://Prashnat9432:Tq8EE5nzGLyIEKzV@cluster0.awd78.mongodb.net/brillio-db?retryWrites=true&w=majority"

connect(uri);

connect(uri)
  .then(() => console.log("MongoDB Connected!!!"))
  .catch(err => console.log(err));
