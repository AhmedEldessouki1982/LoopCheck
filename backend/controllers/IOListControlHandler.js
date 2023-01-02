//import model schema
import {theIOListSchema} from '../models/IOListSchema.js';
//import error handler
import errorHandller from '../errors/errorHandller.js';

//get req
export const getAllData = async (req,res) => {
    try {
        let IOList = await theIOListSchema.find({});
        res.status(200).json({IOList});
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//post req
export const createData = async (req,res) => {
    try {
        await theIOListSchema.create(req.body);
        res.status(200).json(req.body);
        console.log("new signal has been loaded")
    } catch (error) {
        let catchedError = errorHandller (error);
        res.status(500).json({catchedError});
    }
}
//get req "find by id"
export const getData= async (req,res) => {
    try {
        let IOList = await theIOListSchema.findOne({_id: req.params.id})
        res.status(200).json({IOList})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//delete req "find and delete one by id"
export const deleteData = async (req,res) => {
    try {
        let IOList = await theIOListSchema.findOneAndDelete({_id: req.params.id})
        res.status(200).json({IOList})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//delete req "delete all data"
export const deleteAllData = async (req,res) => {
    try {
        let IOList = await theIOListSchema.deleteOne({})
        res.status(200).json({IOList})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//patch req "update data found by id"
export const updateData = async (req,res) => {
    try {
        let IOList = await theIOListSchema.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new: true,
                Validators: true
            }
            )
        res.status(200).json({IOList})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}