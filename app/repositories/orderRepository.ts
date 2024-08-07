import { injectable } from "tsyringe";
import { OrderModel, ProductModel } from "../models";

@injectable()
export default class OrderRepository{
    async create(order: Partial<OrderModel> ): Promise<OrderModel>{
        return await OrderModel.create(order as OrderModel)
    }

    async updateOrder(id: number, newOrder: Partial<OrderModel>){
        return await OrderModel.update(newOrder, {where: {id}});
    }

    async deleteOrder(id: number){
        return await OrderModel.destroy({where: {id: id}})
    }

    async findAll():Promise<OrderModel[]>{
        return await OrderModel.findAll()
    }

    async findProductsByIdOrder(id: number){
        return await OrderModel.findByPk(id, {include: [ProductModel]})
    }

    

}