import express from "express";
import dotenv from "dotenv";
import { connect, data } from "./utils/db.js";

const app = express();
dotenv.config();

app.get("/api/v1/data", (req, res) => {
  connect()
    .then(
      data()
        .toArray()
        .then((data) => {
          res.status(200).json({ success: true, data });
        })
        .catch((err) => res.status(400).json({ success: false, error: err }))
    )
    .catch((err) => {
      res.status(400).json({ success: true, error: err });
    });
});

app.get("/api/v1/filters", (req, res) => {
  connect()
    .then(() => {
      data(req.query)
        .toArray()
        .then((data) => {
          console.log(data);
          res.status(200).json({ success: true, data });
        })
        .catch((err) => res.status(400).json({ success: false, error: err }));
    })
    .catch((err) => {
      res.status(400).json({ success: true, error: err });
    });
});

app.use(express.json());

app.listen(4000, () => {
  console.log("server running at PORT 4000");
});
