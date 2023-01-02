//import model schema
import {theSchema} from '../models/usersSchema.js';
//import error handler
import errorHandller from '../errors/errorHandller.js';

//get req
export const getAllUsers = async (req,res) => {
    try {
        let users = await theSchema.find({});
        res.status(200).json({users});
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//post req
export const createUser = async (req,res) => {
    try {
        await theSchema.create(req.body)
        res.status(200).json(req.body)
    } catch (error) {
        let catchedError = errorHandller (error);
        res.status(500).json({catchedError});
    }
}
//get req "find by id"
export const getUser= async (req,res) => {
    try {
        let user = await theSchema.findOne({_id: req.params.id})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//delete req "find and delete one by id"
export const deleteUser = async (req,res) => {
    try {
        let user = await theSchema.findOneAndDelete({_id: req.params.id})
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//delete req "delete all data"
export const deleteAllUsers = async (req,res) => {
    try {
        let users = await theSchema.deleteOne({})
        res.status(200).json({users})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}
//patch req "update data found by id"
export const updateUser = async (req,res) => {
    try {
        let user = await theSchema.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {
                new: true,
                Validators: true
            }
            )
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({msg: error})
    }
}