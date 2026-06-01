import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {

  cartItems: any[] = [];

  ngOnInit(): void {
    this.cartItems = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );
  }

  getTotal() {
    return this.cartItems.reduce(
      (sum, item) => sum + item.new_price,
      0
    );
  }
}