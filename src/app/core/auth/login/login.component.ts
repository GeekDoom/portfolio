import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private as: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const { email, password } = this.LoginForm.value;

    this.as.login(email, password)
      .subscribe(ok => {
        if (ok === true) {
          this.router.navigateByUrl('/admin')

        } else {
          Swal.fire('Error', ok, 'error')
        }
      })

  }

}
