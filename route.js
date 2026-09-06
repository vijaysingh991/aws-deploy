import { Router } from "express";
import { getMe ,createUser} from "./controller.js";
const userRoute=Router()

userRoute.get("/me",getMe)
userRoute.post("/createUser",createUser)
export default userRoute