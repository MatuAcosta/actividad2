import { Order } from "../models/orderModel";
import { Customer } from "../models/customerModel";
import {Product} from '../models/productModel'
import { checkProduct } from "../helpers/checkProduct";
import {checkCustomer} from "../helpers/checkCustomer"

export class OrderController { 
    async getAll (req,res) { 
        try {
            const orders = await Order.find({})
            res.status(200).json(orders)
        } catch (error) {
            console.log(error)
        }
    }



    async createOrder (req,res) {
        try {
            let {prodId,customerId,total} = req.body; 
            //const productos = await checkProduct(prodId)
            //const customer = await checkCustomer(customerId)
           /* if(!productos){ 
                console.log(productos);
                throw {message:'El cliente o producto no existe '}
            }*/
            const newOrder = new Order ({prodId:prodId,customerId:customerId,total:total})
            await newOrder.save();
            res.status(200).json();
        } catch (error) {
            console.log(error)
            res.status(404).json(error)
        } 

    }
    

}