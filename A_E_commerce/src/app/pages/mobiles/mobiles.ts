import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './mobiles.html',
  styleUrls: ['./mobiles.css']
})
export class Mobiles implements OnInit {

  products: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    fetch('https://prince9559.github.io/jsonproject/Mobiles.json')
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

