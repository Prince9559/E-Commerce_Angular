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
  cartCount = 0;

  ngOnInit(): void {

    this.loadCart();

    window.addEventListener(
      'cartUpdated',
      () => {
        this.loadCart();
      }
    );
  }

  loadCart() {

    this.cartItems =
      JSON.parse(
        localStorage.getItem('cart') || '[]'
      );

    this.cartCount =
      this.cartItems.length;
  }

  removeItem(index: number) {

    this.cartItems.splice(index, 1);

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cartItems)
    );

    window.dispatchEvent(
      new Event('cartUpdated')
    );

    this.loadCart();
  }

  getTotal() {

    return this.cartItems.reduce(
      (sum, item) =>
        sum + Number(item.new_price),
      0
    );
  }
}