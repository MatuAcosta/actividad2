import mongoose from "mongoose";
import { AutoIncrement } from "../db";


const productSchema = new mongoose.Schema({
    _id:{type:Number},
    name:{type: String, required:true},
    description: String,
    price: {type: Number, required:true}
},{_id:false})

productSchema.plugin(AutoIncrement)
export const Product = new mongoose.model('Product',productSchema)
