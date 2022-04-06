import mongoose from 'mongoose'
import { AutoIncrement } from "../db";

const customerSchema = new mongoose.Schema({
    customerId: {type:Number},
    name:{type:String,required:true}
})

if(!mongoose.models.customer){
    customerSchema.plugin(AutoIncrement,{_id:'customer_id_counter',inc_field:'customerId'})
}


export const Customer = new mongoose.model('Customer',customerSchema)
