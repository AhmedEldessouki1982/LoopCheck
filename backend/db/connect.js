import mongoose from "mongoose";

export default function connect (url) {
    return (
        mongoose.connect(url)
        .then(()=>console.log("connected to the Mongodb...OK"))
        .catch((err)=>console.log(err))
    )
}