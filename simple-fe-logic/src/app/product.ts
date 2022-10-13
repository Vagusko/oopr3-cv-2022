export class Product {

  constructor(productId: number, productName: string, description: string, value: number) {
    this.productId = productId;
    this.productName = productName;
    this.description = description;
    this.value = value;
  }

  productId: number;
  productName: string;
  description: string;
  value: number;

}
