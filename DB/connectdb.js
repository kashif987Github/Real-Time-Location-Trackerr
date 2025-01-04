const mongoose = require("mongoose");
 
const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTION = {
      dbName: "crudDB",
    };
    const data = await mongoose.connect(DATABASE_URL, DB_OPTION);
    if (data) {
      console.log("Database connected successfully");
    } else {
      console.log("Database connection failed");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
