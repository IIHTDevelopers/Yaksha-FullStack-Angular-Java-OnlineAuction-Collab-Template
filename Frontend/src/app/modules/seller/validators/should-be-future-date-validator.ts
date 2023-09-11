import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function shouldBeFutureDateValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;
        
        if (!value) {
            return null;
        }

        const hasDatePattern = /\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/.test(value);
        // "^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$"
        // console.log("hasDatePattern: "+hasDatePattern);
        
        const isFutureDate = new Date(value).setHours(0,0,0,0) > new Date().setHours(0,0,0,0);
        // console.log("isFutureDate: "+isFutureDate)

        const isValid = hasDatePattern && isFutureDate;

        const result = !isValid ? {futureDate:"This is not future date"}: null;
        // console.log(result);

        return result;
    }
}