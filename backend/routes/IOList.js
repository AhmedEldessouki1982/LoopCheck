import express from 'express';
import {getAllData, createData, getData, deleteData, deleteAllData, updateData} from '../controllers/IOListControlHandler.js'
export const IOListRouter = express.Router();

IOListRouter.route("/").get(getAllData).post(createData).delete(deleteData);
IOListRouter.route("/:id").get(getData).delete(deleteData).patch(updateData);