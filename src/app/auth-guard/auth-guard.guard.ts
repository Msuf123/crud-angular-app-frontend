import { Inject, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchDataService } from '../services/fetch-data.service';
export const authGuardGuard: CanActivateFn = (route, state) => {
  const a=inject(FetchDataService)
  const navigationService=inject(Router)
  const result=new Promise<boolean>((resolve,reject)=>{
    const response=a.checkServer().subscribe(a=>{
      if(a==='auth'){
        resolve(true)
      }
      else{
        reject(false)
        navigationService.navigate(['/login'])
      }
    })
  })
  

  return result
};
