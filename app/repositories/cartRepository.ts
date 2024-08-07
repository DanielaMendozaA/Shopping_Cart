import { injectable } from "tsyringe";
import { CartModel } from "../models";

@injectable()
export default class CartRepository{
    async create(cart: Partial<CartModel>){
        return await CartModel.create(cart as CartModel)
    }

    async updateTotal(id: number, total: number){
        return await CartModel.update({total: total, id: id},{where: {id}})
    }

    async findCartById(id: number){
        return await CartModel.findByPk(id)
    }
}