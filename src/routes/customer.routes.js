import {Router} from "express";
import { customerController } from "../controllers/customer.controller";

const router = Router();
const custController = new customerController();
router.get('/customers',custController.getAll);
router.get('/customers/:id',custController.getOne)
router.post('/customers',custController.createCustomer);
router.delete('/customers/:id',custController.deleteCustomer);
router.put('/customers/:id',custController.updateCustomer)
export default router;

