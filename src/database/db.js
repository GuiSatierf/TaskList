const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Conectando com o banco de dados...");

  mongoose
    .connect(
      "mongodb+srv://guidev:8banoI6mqYgZgIeZ@tasklist.r97rz.mongodb.net/?retryWrites=true&w=majority&appName=TaskList"
    )
    .then(() => console.log("MongoDB conectado!"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
