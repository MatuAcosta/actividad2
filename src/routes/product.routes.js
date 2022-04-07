import {Router} from 'express'
import ProductController from '../controllers/prod.controller.js'

const productController = new ProductController()

const router = Router(); 
router.get('/products',productController.getAll);
router.get('/products/:id',productController.getOneProduct);
router.post('/products',productController.createProduct)
router.delete('/products/:id',productController.deleteProduct)
router.put('/products/:id',productController.updateProduct)

 export default router

