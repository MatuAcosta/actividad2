import {Product} from '../models/productModel'

export const checkProduct = async (prodId) => { 
    let productOk = true
    try {
        const productos = await Product.findOne({_id:prodId})
        if (!productos) {
            productOk = false
            throw new Error()
        }
        console.log(productos)
    } catch (error) {
        
    } finally{
        return productOk
    }

}
