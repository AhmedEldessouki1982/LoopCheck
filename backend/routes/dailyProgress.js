import express from 'express';
import {getAllDays, createDay, updateDailyStatus} from '../controllers/dailyProgressHandller.js'
export const dailyProgressRouter = express.Router();

dailyProgressRouter.route("/").get(getAllDays).post(createDay);
dailyProgressRouter.route("/:id").patch(updateDailyStatus);
