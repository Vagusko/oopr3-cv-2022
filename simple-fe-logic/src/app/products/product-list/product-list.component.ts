import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../product";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  addProductForm: FormGroup;
  products: Product[] = [];

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.addProductForm = this.formBuilder.group({
      productId: 0,
      productName: "",
      description: "",
      value: 0
    });
  }

  addToCart() {
    var productId = this.addProductForm.value.productId;
    var productName = this.addProductForm.value.productName;
    var description = this.addProductForm.value.description;
    var value = this.addProductForm.value.value;
    var product = new Product(productId, productName, description, value);
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart')

    this.products = this.cartService.getItems();
  }

  ngOnInit(): void {}

}
