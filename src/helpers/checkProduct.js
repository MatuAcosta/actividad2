import {Product} from '../models/productModel'

export const checkProduct = async (prodId) => { 
    const productos = await Promise.all(prodId.map(async (el)=> { 
        try {
            let prod =  await Product.findOne({_id:el})
            if (!prod) throw {message:'producto no existente'}    
            return prod
        } 
        catch (error) {
            console.log(error)
        }
    }))
}
