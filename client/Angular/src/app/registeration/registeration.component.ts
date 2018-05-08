import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  name = '';
  email = '';
  password = '';
  password1 = '';
  isSeller = false;
  btnDisabled = false;

  constructor(private router: Router, private data: DataService, private rest: RestApiService) { }

  ngOnInit() {
  }
  validate() {
    if (this.name) {
      if (this.email) {
        if (this.password) {
          if (this.password1) {
            if (this.password === this.password1) {
              return true;
            } else {
              this.data.error('password do not match.');
            }
          } else {
            this.data.error('password do not confirmed.');
          }
        } else {
          this.data.error('password is not entered.');
        }
      } else {
        this.data.error('email is not entered.');
      }
    } else {
      this.data.error('name is not entered.');
    }
  }
  async register() {
    this.btnDisabled = true;

    try {
      if (this.validate()) {
        const data = await this.rest.post(
          'http://localhost:3030/api/accounts/signup',
          {
            name: this.name,
            password: this.password,
            email: this.email,
            isSeller: this.isSeller,
            created: Date.now
          }
        );

        if (data['success']) {
          localStorage.setItem('token', data['token']);
          this.data.success('Registration Successful.');
          this.router.navigate(['/']);
        } else {
          this.data.error(data['message']);
        }
      }
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }
}
