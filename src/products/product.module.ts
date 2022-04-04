import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { productsController } from "./products.controller";


@Module({
    controllers:[productsController],
    providers:[ProductService]
})
export class ProductModule{}