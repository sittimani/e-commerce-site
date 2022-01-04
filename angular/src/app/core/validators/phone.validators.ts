import { FormControl } from "@angular/forms";

export function phoneValidator(control: FormControl) {
    const value = control.value
    const result = /[0-9]/.test(value)
    return result && value.length === 10 ? null : { invalidPhone: { value: value } }
}