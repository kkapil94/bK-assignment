import mongoose from "mongoose";

const connect = () => {
    return mongoose.connect(`mongodb+srv://kapil:${process.env.MONGO_PASSWORD}@cluster0.gnmjov6.mongodb.net/?retryWrites=true&w=majority`);
  };
  
  const data = (filterQuery) => {
    const dataCollection = mongoose.connection.useDb("blackCoffer").collection("data");
    return dataCollection.find(filterQuery);
  };
  
  export {connect,data}