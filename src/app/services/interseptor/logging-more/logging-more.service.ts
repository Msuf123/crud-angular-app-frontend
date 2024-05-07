import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingMoreService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=localStorage.getItem('my-token')
    console.log(token,'Token in te system')
    const  newreq=req.clone({
      headers:new HttpHeaders({Authorization:'Bearer '+token})
    }) 
    console.log(newreq.headers)
    return next.handle(newreq)
  }
}
