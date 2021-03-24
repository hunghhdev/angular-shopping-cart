import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.count();
  }
  numberItems: number = 0;
  subTotal: number = 0;
  products: Product[] = [
    {
      id: 1,
      name: 'PRODUCT ITEM NUMBER 1',
      description: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 500000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'PRODUCT ITEM NUMBER 2',
      description: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 5,
    },
    {
      id: 3,
      name: 'PRODUCT ITEM NUMBER 3',
      description: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 2,
    },
  ];

  removeProduct(id: number) {
    let index = this.products.findIndex((item) => item.id == id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.count();
  }

  updateQuantity(product: { id: number; quantity: number }) {
    let index = this.products.findIndex((item) => item.id == product.id);
    this.products[index].quantity = product.quantity;
    this.count();
  }

  count() {
    let numberItems = 0;
    let subToTal = 0;

    for (let item of this.products) {
      numberItems += item.quantity;
      subToTal += item.price * item.quantity;
    }

    this.numberItems = numberItems;
    this.subTotal = subToTal;
  }
}
