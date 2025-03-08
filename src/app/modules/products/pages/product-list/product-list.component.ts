import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../../../core/models/Product';
import { WebSocketService } from '../../services/websocket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private wsService: WebSocketService
  ) {}

  ngOnInit(): void {
    this.loadProducts();
    this.listenWebSocket();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.products = this.products.filter(product => product.Id !== id);
      });
    }
  }

  listenWebSocket(): void {
    this.wsService.getMessages().subscribe((message) => {
      if (message.sender === 'API_REST' && message.DestinationID === '123') {
        Swal.fire({
          title: '📢 Notificación',
          text: message.content, 
          icon: 'info',
          timer: 5000, 
          timerProgressBar: true
        });
      }
    });
  }
}
