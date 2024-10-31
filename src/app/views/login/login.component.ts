import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { UserDataServiceService } from '../../services/user-data-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  constructor(private router: Router, private userService: UserDataServiceService) {}


  username = new FormControl('');
  password = new FormControl('');

  validateLogin() {

    this.userService.getUserData().subscribe((user: any) => {
      
    })

    console.log('here',this.password.value);
    if(this.password.value === '1234') {
      this.router.navigate(['home']);
    }
  }
}
