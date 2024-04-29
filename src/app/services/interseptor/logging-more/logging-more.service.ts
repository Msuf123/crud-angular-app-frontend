import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingMoreService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const  newreq=req.clone({
      headers:new HttpHeaders({Authorization:'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWtzaGF0bWFsaWsxOHRAZ21haWwuY29tIiwiaWF0IjoxNzE0NDEyOTg4fQ.JlSSOqWUEqJ_NswSmUsc7HBKpJ8070fbxdP-HBOeR98'})
    }) 
    console.log(newreq.headers)
    return next.handle(newreq)
  }
}
