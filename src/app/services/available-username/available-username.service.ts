import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable,map,of,pipe, tap } from 'rxjs';
import { FetchDataService } from '../fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class AvailableUsernameService implements AsyncValidator {

  constructor(private request:FetchDataService) { }
  validate(control: AbstractControl<any, any>):Observable<ValidationErrors | null> {
   return this.request.validateInput({username:control.value}).pipe(map((a)=>a==='invalid'?{valid:true}:null))
     
      
  }
}
