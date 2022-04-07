import {Product} from '../models/productModel'

export const checkProduct = async (prodId) => { 
    let productOk = true
    const productos = await Promise.all(prodId.map(async (el)=> { 
        try {
            let prod =  await Product.findOne({_id:el})
            if (!prod) {
                productOk = false
                throw {message:'producto no existente'} }
                
            return prod
        } 
        catch (error) {
            console.log(error)
        }
    }))

    productos.forEach(e => {

    })
    return productOk
}
