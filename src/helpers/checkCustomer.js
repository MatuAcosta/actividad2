import { Customer } from "../models/customerModel"

export const checkCustomer = async (customerId) => { 
    return  await Customer.findOne({customerId:customerId})
    
}