import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {
  await mongoose.connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME,
  });
};

const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "Connection error:"));
conn.once("open", () => {
  console.log(`Connected to MongoDB, database name: ${process.env.DB_NAME}`);
});

export default connection;
