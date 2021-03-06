import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { color } from 'src/environments/environment.prod';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public color = color
  public isHide = true
  public loginForm: FormGroup
  public title = "Login Form"

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private toastr: ToastrService) {
    this.isUserLoggedIn()
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]]
    })
  }

  logIn() {
    const value = this.loginForm.value
    this.authService.login(value).subscribe(response => {
      this.authService.setToken(response)
      this.toastr.success("Login Successfully !!!")
      this.router.navigate(['/products'])
    })
  }

  getField(field: string) {
    return this.loginForm.get(field) as FormControl
  }

  isUserLoggedIn() {
    if (this.authService.getToken())
      this.router.navigate(['/products'])
    this.authService.isUserLoggedin(false)
  }
}
