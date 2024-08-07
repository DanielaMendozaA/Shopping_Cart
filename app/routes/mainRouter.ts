import { Router } from "express";
import { productRouter, userRouter, authRouter, productCartRouter, orderRouter } from "./index";
import authJWT from "../middlewares/verifyJWT";

const mainRouter = Router();
mainRouter.use("/auth", authRouter)
mainRouter.use("/products", authJWT, productRouter)
mainRouter.use("/users", authJWT, userRouter)
mainRouter.use("/product-cart", authJWT, productCartRouter)
mainRouter.use("/orders", authJWT, orderRouter)
export default mainRouter;