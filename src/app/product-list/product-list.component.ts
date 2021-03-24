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
  @Output() onUpdateQuantity = new EventEmitter();

  ngOnInit(): void {}

  removeProduct(id: number): void {
    this.onRemoveProduct.emit(id);
  }

  updateQuantity(id: number, element: HTMLInputElement): void {
    this.onUpdateQuantity.emit({id, quantity: element.value});
  }
}
