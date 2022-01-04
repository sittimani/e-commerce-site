import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { misMatch } from 'src/app/core/validators/mis-match.validators';
import { nameValidator } from 'src/app/core/validators/name.validators';
import { invalidPassword } from 'src/app/core/validators/password.validators';
import { phoneValidator } from 'src/app/core/validators/phone.validators';
import { color } from 'src/environments/environment.prod';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public color = color
  public isHide = true
  public registrationForm: FormGroup
  public title = "Registration Form"

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: ["", [Validators.required, nameValidator]],
      phone: ["", [Validators.required, phoneValidator]],
      email: ["", [Validators.required, Validators.email, invalidPassword]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      confirmPassword: ["", [Validators.required]]
    }, { validators: misMatch("password", "confirmPassword") })
  }

  register() {
    console.log(this.registrationForm.value)
  }

  getField(field: string) {
    return this.registrationForm.get(field) as FormControl
  }

}
