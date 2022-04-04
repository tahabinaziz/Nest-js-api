import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('/products')
export class productsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  addProduct(
    //  @Body completeBody :{prodTitle: string,prodDesc:string,prodPrice:number}
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  @Get()
  getAllProducts() {
    return this.productService.getProduct();
  }

  @Get(':productId')
  getProduct(@Param('productId') prodId: string) {
    this.productService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number,
  ) {
    this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return 'Updated';
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string) {
      this.productService.removeProduct(prodId);
      return 'Deleted'
  }
}
