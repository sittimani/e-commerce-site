import { AbstractControl, FormControl } from "@angular/forms";

export function misMatch(fieldOne: string, fieldTwo: string) {
    return (control: FormControl) => {
        const firstControl = control.get(fieldOne)
        const secondControl = control.get(fieldTwo)
        return firstControl?.value === secondControl?.value ? null : setFieldError(secondControl)
    }
}

function setFieldError(control: AbstractControl | null) {
    control?.setErrors({ misMatch: control.value })
    return null
}