import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [
    {
      name: 'PRODUCT ITEM NUMBER 1',
      desc: 'Description for product item number 1',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 5.99,
      quantity: 2
    },
    {
      name: 'PRODUCT ITEM NUMBER 2',
      desc: 'Description for product item number 2',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 2
    },
    {
      name: 'PRODUCT ITEM NUMBER 3',
      desc: 'Description for product item number 3',
      thumbnail: 'https://via.placeholder.com/200x150',
      price: 9.99,
      quantity: 2
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
