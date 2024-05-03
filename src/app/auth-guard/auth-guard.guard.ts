import { Inject, Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { FetchDataService } from '../services/fetch-data.service';
export const authGuardGuard: CanActivateFn = (route, state) => {
  const request=inject(FetchDataService)
  const navigationService=inject(Router)
   return request.checkServer().pipe(map((a)=>a==='auth'?true:false),tap((a)=>!a?navigationService.navigate(['/login']):null))
      
};
