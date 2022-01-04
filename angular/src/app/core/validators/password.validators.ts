import { FormControl } from "@angular/forms";

export function invalidPassword(control: FormControl) {
    const value = control.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    return regex.test(value) ? null : { invalidPassword: { value: value } }
  }