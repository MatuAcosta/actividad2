import {Router} from 'express'
import ProductController from '../controllers/prod.controller.js'

const controller = new ProductController()

const router = Router(); 
router.get('/products',controller.getAll);
router.get('/products/:id',controller.getOneProduct);
router.post('/products',controller.createProduct)
router.delete('/products/:id',controller.deleteProduct)
router.put('/products/:id',controller.updateProduct)

 export default router

