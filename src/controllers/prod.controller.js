import res from "express/lib/response";
import  {Product}  from "../models/productModel";


class ProductController { 

    async getAll(req,res) { 
        try {
            const products = await Product.find({});
            res.json(products)
        } catch (error) {
            console.log(error)
        }
    }

    async getOneProduct (req,res) { 
        try {
            let id = req.params.id
            const product = await Product.findById(id,'name description price')
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
        }
    }

    async createProduct (req,res){ 
        try {
            const {_id,name,description,price} = req.body; 
            const newProduct = new Product ({_id,name,description: description  || 'sin descripcion',price})
            await newProduct.save()
            res.status(200).send()
        } catch (error) {
            console.log(error)
        }
        
    }
    async updateProduct (req,res) { 
        try {
            let data = req.body
            const updatedProduct = await Product.updateOne({_id:req.params.id},data)
            res.status(200).send(updatedProduct)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteProduct (req,res){
        try {
            let id = req.params.id; 
            const productDeleted = await Product.deleteOne({_id:id});
            res.status(200).send(productDeleted)
        } catch (error) {
            console.log(error)
        }
    }
}

export default ProductController
