import mongoose from "mongoose";

const schema = new mongoose.schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type: String,
        required : true,
        unique : true,
    },
    password:{
        type: String,
        required : true
    },
    role:{
        type: String,
        default :"user",
    },
    subscription: [
        {
            type : mongoose.schema.types.ObjectId,
            ref: "Course",
        }
    ]
    
},{
    timestamps: true,
})

export const use = mongoose.model("user", schema);