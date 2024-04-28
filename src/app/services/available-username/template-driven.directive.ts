import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FetchDataService } from '../fetch-data.service';

@Directive({
  selector: '[appTemplateDriven]',
  standalone: true,
  providers:[{provide:NG_ASYNC_VALIDATORS,useExisting:forwardRef(()=>TemplateDrivenDirective),multi:true}]
})
export class TemplateDrivenDirective implements AsyncValidator{

  constructor(private request:FetchDataService) { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    console.log('Async validtor')
    return this.request.validateInput({username:control.value}).pipe(map((a)=>a==='invalid'?{valid:true}:null))
     
  }

}
