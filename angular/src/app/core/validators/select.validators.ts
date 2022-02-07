import { AbstractControl } from "@angular/forms";

export function selectvalidator(control: AbstractControl) {
    console.log(control.value)
    const data = control.value
    return data === 'no' ? {invalidSelect: {value:data}} : null
}