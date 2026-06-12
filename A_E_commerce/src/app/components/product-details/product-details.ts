import {Component,OnInit,ChangeDetectorRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails implements OnInit {

  product: any = null;
  selectedImage = '';

  showZoom = false;
  zoomPosition = '0% 0%';

  lensX = 0;
  lensY = 0;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

    const category =
      this.route.snapshot.paramMap.get('category');
    const id =Number(this.route.snapshot.paramMap.get('id'));

    const fileMap: any = {
      fashion: 'Fashion.json',
      mobiles: 'Mobiles.json',
      beauty: 'Beauty.json',
      electronics: 'Electronics.json',
      'home-appliances': 'Home.json',
      toys: 'Toys.json',
      food: 'Food.json',
      sports: 'Sport.json',
      books: 'Book.json',
      all_item: 'All_item.json',
      show: 'show.json',
      you: 'You.json'
    };

    const fileName = fileMap[category || ''];

    if (!fileName) return;

    fetch(
      `https://prince9559.github.io/jsonproject/${fileName}`
    )
      .then(res => res.json())
      .then(data => {

        this.product =data.find((item: any) => item.id === id);
        this.selectedImage =this.product?.image;
        this.cdr.detectChanges();
      });
  }

  changeImage(img: string) {
    this.selectedImage = img;
  }

  zoomImage(event: MouseEvent) {

    const img =event.target as HTMLImageElement;
    const rect =img.getBoundingClientRect();
    const x =((event.clientX - rect.left) /rect.width) * 100;
    const y =((event.clientY - rect.top) /rect.height) * 100;

    this.zoomPosition = `${x}% ${y}%`;
    this.lensX =event.clientX - rect.left - 60;
    this.lensY =event.clientY - rect.top - 60;
    this.showZoom = true;
  }

  hideZoom() {
    this.showZoom = false;
  }

  addToCart() {

    let cart = JSON.parse(
      localStorage.getItem('cart') || '[]'
    );

    cart.push(this.product);

    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );

    window.dispatchEvent(
      new Event('cartUpdated')
    );

    this.toastr.success(
      'Product Added To Cart',
      'Success'
    );
  }
}