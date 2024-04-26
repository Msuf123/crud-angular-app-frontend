import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { FetchDataService } from '../fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class AvailableUsernameService implements AsyncValidator {

  constructor(private request:FetchDataService) { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const response=new Promise<ValidationErrors|null>((resolve,reject)=>{
      console.log('hi I am sending reques tot server')
      this.request.validateInput({username:control.value}).subscribe((a)=>console.log(a))
      resolve(null)
    })
    return response
  }
}
