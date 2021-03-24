import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();

  ngOnInit(): void {}

  removeProduct(id: number): void {
    this.onRemoveProduct.emit(id);
  }

  updateQuantity(element: HTMLInputElement) {
    console.log(element.value);
  }
}
