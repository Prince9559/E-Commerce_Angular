import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-for-you',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-you.html',
  styleUrl: './for-you.css',
})
export class ForYou implements OnInit {

  products: any[] = [];

  @ViewChild('slider', { static: false }) slider!: ElementRef;

  ngOnInit(): void {
    fetch('https://prince9559.github.io/jsonproject/You.json')
      .then(res => res.json())
      .then(data => this.products = data);
  }

  scrollLeft() {
    this.slider.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }
}