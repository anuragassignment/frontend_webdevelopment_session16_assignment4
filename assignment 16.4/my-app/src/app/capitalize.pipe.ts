import { PipeTransform, Pipe } from '@angular/core';
// Custom Pipe which capitalizes the first word of the input data
@Pipe({
    name: 'capitalize'
})
export class Capitalize implements PipeTransform {
    transform(value: any) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}