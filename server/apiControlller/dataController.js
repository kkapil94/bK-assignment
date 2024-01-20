import connect from "../utils/db.js";

export const getData = async (req, res) => {
  try {
    const db = await connect();
    const data = await db.connection
      .useDb("blackCoffer")
      .collection("data")
      .find()
      .toArray();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};
