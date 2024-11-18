import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";
dotenv.config();

const URL = process.env.DB_URL;

const MongoDB = async () => {
  try {
    if (!URL) throw new Error("Database URL is not defined.");
    await mongoose.connect(URL);
    console.log("Database is connection");
  } catch (error) {
    console.log(error);
  }
};

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Is Running http://localhost:${PORT}`);
  MongoDB();
});
