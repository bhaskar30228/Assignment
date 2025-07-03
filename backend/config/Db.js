import mongoose from "mongoose";
import { log } from "console";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    log("MongoDB connection SUCCESSFUL");
  } catch (err) {
    console.error("MongoDB connection FAILED", err.message);
    process.exit(1);
  }
};

export default connectDb;