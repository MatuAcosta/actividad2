import mongoose from 'mongoose'
import { AutoIncrement } from "../db";
import { Customer } from './customerModel';
import { checkCustomer } from '../helpers/checkCustomer';
import { checkProduct } from '../helpers/checkProduct';
const {Schema} = mongoose; 



const orderSchema = Schema({
    orderId : {type:Number},
    prodId: [{type:Number,ref:'Product',required:true,validate: checkProduct}],
    customerId: {type:Number,ref:'Customer',required:true, validate: checkCustomer},
    date: {type:Date, default: Date.now},
    total: {type:Number, required:true}
})


if(!mongoose.models.order){
    orderSchema.plugin(AutoIncrement,{_id:'order_id_counter',inc_field:'orderId'})
}

export const Order = new mongoose.model('Order', orderSchema)