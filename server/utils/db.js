import mongoose from "mongoose";

const connect = async() => {
  const conn = await mongoose.connect(
    `mongodb+srv://kapil:${process.env.MONGO_PASSWORD}@cluster0.gnmjov6.mongodb.net/?retryWrites=true&w=majority`
  );
  return conn;
};

export default connect;
