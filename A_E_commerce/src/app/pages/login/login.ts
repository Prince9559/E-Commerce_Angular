import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/for-you']);
    }
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/for-you']);
  }
}