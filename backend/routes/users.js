import express from 'express';
import {getAllUsers, createUser, getUser, deleteUser, deleteAllUsers, updateUser} from '../controllers/usersControlHandler.js'
export const usersRouter = express.Router();

usersRouter.route("/").get(getAllUsers).post(createUser).delete(deleteAllUsers);
usersRouter.route("/:id").get(getUser).delete(deleteUser).patch(updateUser);