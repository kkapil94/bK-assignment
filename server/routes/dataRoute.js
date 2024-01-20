import Router from "express"
import { getData } from "../apiControlller/dataController.js";

const router = new Router();

router.get("/",getData)

export default router