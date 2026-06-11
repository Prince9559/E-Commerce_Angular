import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Fashion } from './pages/fashion/fashion';
import { Mobiles } from './pages/mobiles/mobiles';
import { Beauty } from './pages/beauty/beauty';
import { Electronics } from './pages/electronics/electronics';
import { HomeAppliances } from './pages/home-appliances/home-appliances';
import { Toys } from './pages/toys/toys';
import { Food } from './pages/food/food';
import { Sports } from './pages/sports/sports';
import { Books } from './pages/books/books';
import { Cart } from './pages/cart/cart';
import { ForYou } from './pages/for-you/for-you';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { Logout } from './pages/logout/logout';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'for-you', component: ForYou },
  { path: 'home', component: Home },
  { path: 'fashion', component: Fashion },
  { path: 'mobiles', component: Mobiles },
  { path: 'beauty', component: Beauty },
  { path: 'electronics', component: Electronics },
  { path: 'home-appliances', component: HomeAppliances },
  { path: 'toys', component: Toys },
  { path: 'profile', component: Profile },
  { path: 'food', component: Food },
  { path: 'sports', component: Sports },
  { path: 'books', component: Books },
  { path: 'cart', component: Cart },
  {path : 'logout',component: Logout},
  { path: 'product/:category/:id', component: ProductDetails }

];