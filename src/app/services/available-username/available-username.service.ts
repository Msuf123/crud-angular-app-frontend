import { Inject, Injectable, InjectionToken, Optional, inject } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable,map,of,pipe, tap } from 'rxjs';
import { FetchDataService } from '../fetch-data.service';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AvailableUsernameService implements AsyncValidator {
  
  constructor(private request:FetchDataService) {}
  validate(control: AbstractControl<any, any>):Observable<ValidationErrors | null> {
   return this.request.postMethod('http://localhost:3003/sign-up/checkUserExists',{username:control.value}).pipe(map((a)=>a==='invalid'?{valid:true}:null))
     
      
  }
}
