import { ProductCart } from "../models";
import ProductCartRepository from "../repositories/productCartRepository";
import { injectable, inject } from "tsyringe";
import { container } from "tsyringe";
import CartRepository from "../repositories/cartRepository";
import ProductRepository from "../repositories/productRepository";

@injectable()
export default class ProductCartService {
    constructor(@inject('ProductCartRepository') private productCartRepository: ProductCartRepository) { }

    async createProducCart(productCart: Partial<ProductCart>): Promise<(number | ProductCart)[]>{
        const cartRepository = container.resolve(CartRepository);
        const productRepository = container.resolve(ProductRepository);
        const productId = productCart.productId;

        if (!productId) throw new Error("Please provide product id");

        const product = await productRepository.findProductById(productId);
        console.log(product);
        if (!product) throw new Error("Product not found");

        const productStock = product.stock;

        if (!productCart.quantity) throw new Error("Please provide quantity");

        if (productStock < productCart.quantity) throw new Error("Not enough stock");
        const total = productCart.quantity * product.price;

        if (!productCart.cartId) throw new Error("Please provide cart id");
        const cart = await cartRepository.findCartById(productCart.cartId);
        if (!cart) throw new Error("Cart not found");
        const totalCart = cart.total + total;
        await cartRepository.updateTotal(productCart.cartId, totalCart);

        const productCartCreated = await this.productCartRepository.create(productCart)
        return  [total, productCartCreated]
    }

    async deleteProduct(id: number) {
        return await this.productCartRepository.deleteProductCart(id)
    }

    async updateQuantity(id: number, newQuantity: number) {
        return await this.productCartRepository.updateProductQuantity(id, newQuantity)
    }
}