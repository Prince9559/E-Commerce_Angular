import {Component,OnInit,ViewChild,ElementRef,ChangeDetectorRef} from '@angular/core';
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

  @ViewChild('slider') slider!: ElementRef;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

    fetch('https://prince9559.github.io/jsonproject/You.json')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        this.cdr.detectChanges();
      })
      .catch(error => console.log(error));
  }

  scrollLeft() {
    this.slider.nativeElement.scrollBy({
      left: -800,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({
      left: 800,
      behavior: 'smooth'
    });
  }
}