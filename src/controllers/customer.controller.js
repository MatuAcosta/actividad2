import { Customer } from "../models/customerModel";

export class customerController { 

    async getAll (req,res) { 
        try {
            const customers = await Customer.find({},'name customerId');
           return  res.json(customers)
        } catch (error) {
            console.log(error)
        }
    }

    async getOne (req,res) { 
        try {
            let id = req.params.id; 
            console.log(id)
            const cust = await Customer.findOne({customerId:id}).exec();
            res.json(cust)
        } catch (error) {   
            console.log(error)
        }
    }
    async deleteCustomer (req,res){
        try {
            let id = req.params.id; 
            const deleteCustomer = await Customer.deleteOne({customerId:id})
            res.status(200).json(deleteCustomer)
        } catch (error) {
            console.log(error)
        }
    }
    async updateCustomer (req,res) { 
        try {
            let id = req.params.id
            let data = req.body; 
            const resp = await Customer.updateOne({customerId:id},data)
            res.status(200).json(resp)
        } catch (error) {
            console.log(error)
        }
    }
    async createCustomer (req,res) { 
        try {
           let {name} = req.body; 
           const newCust = new Customer({name});
           await newCust.save();
           res.json(newCust)

        } catch (error) {
            console.log(error)
        }
    }

}