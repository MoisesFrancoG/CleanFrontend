import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../core/models/Product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
})
export class ProductTableComponent {
  @Input() products: Product[] = [];
  @Output() delete = new EventEmitter<number>();

  deleteProduct(id: number) {
    this.delete.emit(id);
  }
}
