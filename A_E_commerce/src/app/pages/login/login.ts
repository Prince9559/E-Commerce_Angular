import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  email = '';
  password = '';

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

    if (localStorage.getItem('isLoggedIn') === 'true') {
      this.router.navigate(['/for-you']);
    }

  }

  login(): void {

    if (!this.email || !this.password) {
      this.toastr.error(
        'Please fill all fields',
        'Validation Error'
      );
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.email)) 
      {
      this.toastr.warning(
        'Please enter a valid email address',
        'Invalid Email'
      );

      return;
    }

    localStorage.setItem(
      'isLoggedIn',
      'true'
    );

    this.toastr.success(
      'Login Successful',
      'Welcome'
    );

    setTimeout(() => {
      this.router.navigate(
        ['/for-you']
      );
    }, 1000);
  }
}