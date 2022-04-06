import {Router} from "express";
import { OrderController } from "../controllers/order.controller";

const router = Router();
const ordController = new OrderController();
router.get('/orders',ordController.getAll);
router.post('/orders',ordController.createOrder)
export default router