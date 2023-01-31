//import model schema
import {thedailyProgressSchema} from '../models/dailyProgressSchema.js';

//get req
export const getAllDays = async (req,res) => {
    try {
        let dailyStatus = await thedailyProgressSchema.find({});
        res.status(200).json(dailyStatus);
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

//post req
export const createDay = async (req,res) => {
    try {
        await thedailyProgressSchema.create(req.body);
        res.status(200).json(req.body);
        console.log(req.body)
    } catch (error) {
        let catchedError = errorHandller (error);
        res.status(500).json({catchedError});
    }
}

//patch req "update data found by id"
export const updateDailyStatus = async (req,res) => {
    try {
        let dailyStatus = await thedailyProgressSchema.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new: true,
                Validators: true
            }
            )
        res.status(200).json({dailyStatus})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}