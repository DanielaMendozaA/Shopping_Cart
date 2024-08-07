import { Router } from "express";
import OrderController from "../controllers/orderController";
import { container } from "tsyringe";
import UserPermissions from "../middlewares/permissions";

export const orderRouter = Router();
const userPermissions = container.resolve(UserPermissions);

orderRouter.post("/", userPermissions.checkPermissions('create', 2), OrderController.createNewOrder);
orderRouter.get("/", userPermissions.checkPermissions('read', 2), OrderController.getAllOrders);
orderRouter.get("/:id/products", userPermissions.checkPermissions('read', 2), OrderController.getUserWithProducts)
orderRouter.put("/:id", userPermissions.checkPermissions('update', 2), OrderController.updateOrder);
orderRouter.delete("/:id", userPermissions.checkPermissions('delete', 2), OrderController.deleteOrder);


