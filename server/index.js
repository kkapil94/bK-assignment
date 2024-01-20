import express from "express";
import dotenv from "dotenv";
import dataRouter from "./routes/dataRoute.js"

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/v1/data",dataRouter)


app.listen(4000, () => {
  console.log("server running at PORT 4000");
});
