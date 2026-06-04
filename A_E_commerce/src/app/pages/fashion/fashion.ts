import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fashion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fashion.html',
  styleUrls: ['./fashion.css']
})

export class Fashion implements OnInit {

  products: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void 
  {
    fetch('https://prince9559.github.io/jsonproject/Fashion.json')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        this.cdr.detectChanges();
        console.log(this.products);
      })
      .catch(error => console.log(error));
  }
}