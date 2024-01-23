
import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../controller/userController.js";

const userRoute=express.Router();

userRoute.post("/add",addUser);
userRoute.get("/get",getUsers);
userRoute.patch("/updateName/:id",updateUser);
userRoute.delete("/delete/:id",deleteUser);

export default userRoute;