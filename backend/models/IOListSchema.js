import mongoose from "mongoose";

let model = 
{
	"id": {type: Number},
	"Area": {type: String},
	"status": {type: Boolean},
	"System": {type: String},
	"Equipment": {type: String},
	"kks": {type: String},
	"tag": {type: String},
	"SignalType": {type: String},
	"Description": {type: String}
};

let IOListSchema = mongoose.Schema (model);
export const theIOListSchema =  mongoose.model (
    "IOListSchema",
    IOListSchema
)