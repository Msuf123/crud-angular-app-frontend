import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Observable, catchError, elementAt, retry, tap, throwError } from 'rxjs';

@Injectable({providedIn:'root'})

export class FetchDataService {
 private http=inject(HttpClient)
  constructor() { }
  errorHandler(errorObject:HttpErrorResponse){
     if(errorObject.status===0){
      console.log(errorObject.message,'Ther error is on out side')
      console.log(errorObject)
     }
     else{
      console.log(errorObject.error,'The error is on server side opps',errorObject.status)
     }
     
    return  new Observable<string>((sub) => sub.next('Something bad happened; please try again later.'));
  }
  
  getRequest(url:string){
    return this.http.get(url,{observe:'body',responseType:'text'}).pipe(catchError(this.errorHandler))
  }
  getData(){
    return this.http.get<Friends[]>('http://localhost:3003/friends',{observe:'body',responseType:'json'})

  }
  sendData(data:any){
    return this.http.post<Friends[]>('http://localhost:3003/friends/add',data,{headers:{'Content-Type':"application/json"},responseType:'json'})
  }
  deleteData(url:string,id:string){
    let prams=new HttpParams().set('name',id)
    return this.http.delete(url,{params:prams,observe:'body',responseType:'text'})
  }
  updateData(data:any){
    return this.http.put('http://localhost:3003/friends',data,{observe:'body',responseType:'text'})
  }
  
  postMethod(url:string,data:any){
    return this.http.post(url,data,{observe:'body',responseType:'text'}).pipe(catchError(this.errorHandler))
  }
}
export interface Friends{
  name:string,place:string
}
