import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobiles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './food.html',
  styleUrl: './food.css',
})
export class Food implements OnInit {

  products: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    fetch('https://prince9559.github.io/jsonproject/Food.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        this.products = data;
        this.cdr.detectChanges();

        console.log('Mobiles Loaded:', this.products);
      })
      .catch(error => {
        console.error('Error Loading Mobiles:', error);
      });

  }
}