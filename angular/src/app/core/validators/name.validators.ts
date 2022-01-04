import { FormControl } from "@angular/forms";

export function nameValidator(control: FormControl) {
    const value = control.value
    const result = /[A-Za-z]/.test(value)
    return result ? null : { invalidName: { value: value } }
}