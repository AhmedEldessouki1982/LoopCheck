import mongoose from "mongoose";

let model = {
    name: {
        type: String,
        required: [true, "User name is missing!!!"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Add valid email address"],   //make in arr and the 2nd element will be the error string [the condition , the error string]
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "Please add a password"],   //make in arr and the 2nd element will be the error string [the condition , the error string],
        minlength: [6 , "Min password length should be 6 char/digits"]
    },
    contact: Number,
    avaible: Boolean
}

const usersSchema = mongoose.Schema (model);
export const theSchema =  mongoose.model (
    "usersSchema",
    usersSchema
)