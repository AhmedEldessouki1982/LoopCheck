import mongoose from "mongoose";

let dailyProgressSchema = mongoose.Schema ({ dates: {type: mongoose.Mixed}});
export const thedailyProgressSchema =  mongoose.model (
    "dailyProgressSchema",
    dailyProgressSchema
)