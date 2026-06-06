import {Component,OnInit,ViewChild,ElementRef,ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-for-you',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './for-you.html',
  styleUrl: './for-you.css'
})
export class ForYou implements OnInit {

  products: any[] = [];
  showProducts: any[] = [];
  all_item:any[]=[];

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

    fetch('https://prince9559.github.io/jsonproject/show.json')
      .then(response => response.json())
      .then(data => {
        this.showProducts = data;
        this.cdr.detectChanges();
      })
      .catch(error => console.log(error));

      
    fetch('https://prince9559.github.io/jsonproject/All_item.json')
      .then(response => response.json())
      .then(data => {
        this.all_item = data;
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