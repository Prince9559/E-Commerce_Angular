import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {

  cartCount = 0;

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.loadCartCount();

    window.addEventListener(
      'cartUpdated',
      () => {

        this.loadCartCount();

        this.cdr.detectChanges();

      }
    );
  }

  loadCartCount() {

    const cart = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    this.cartCount = cart.length;
  }
}