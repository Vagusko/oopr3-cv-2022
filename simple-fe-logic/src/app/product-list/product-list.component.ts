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

  addUserForm: FormGroup;
  products: Product[] = [];

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      productId: 0,
      productName: "",
      description: "",
      value: 0
    });
  }

  addToCart() {
    var productId = this.addUserForm.value.productId;
    var productName = this.addUserForm.value.productName;
    var description = this.addUserForm.value.description;
    var value = this.addUserForm.value.value;
    var product = new Product(productId, productName, description, value);
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart')

    this.products = this.cartService.getItems();
  }

  ngOnInit(): void {}

}
