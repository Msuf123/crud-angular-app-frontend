import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterseptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('hi')
    return next.handle(req)
  }
  constructor() { }
}
export const CustormInterceptor:Provider={provide:HTTP_INTERCEPTORS,useClass:InterseptorService,multi:true
}