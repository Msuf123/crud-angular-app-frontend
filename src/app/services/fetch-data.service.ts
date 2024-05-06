import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, inject } from '@angular/core';
import { flush } from '@angular/core/testing';
import { catchError, elementAt, retry, throwError } from 'rxjs';

@Injectable({providedIn:'root'})

export class FetchDataService {
 private http=inject(HttpClient)
  constructor() { }
  errorHandler(errorObject:HttpErrorResponse){
     if(errorObject.status===0){
      console.log(errorObject.message,'Ther error is on out side')
     }
     else{
      console.log(errorObject.error,'The error is on server side opps',errorObject.status)
     }
    return errorObject.message
  }
  postGithubCode(){
    return this.http.post('http://localhost:3003',{code:'556'},{observe:'body',responseType:'text'})
  }
  checkServer(){
    return this.http.get('http://localhost:3003/',{observe:'body',responseType:'text'}).pipe(catchError(this.errorHandler))
  }
  validateInput(body:{username:string}){
    return this.http.post('http://localhost:3003/sign-up/verifyUserName',body,{observe:'body',responseType:'text'})
  }
  getData(){
    return this.http.get<Friends[]>('http://localhost:3003/friends',{observe:'body',responseType:'json'})

  }
  sendData(data:any){
    return this.http.post<Friends[]>('http://localhost:3003/friends/add',data,{headers:{'Content-Type':"application/json"},responseType:'json'})
  }
  createFriends(data:any){
    return this.http.post('http://localhost:3003/sign-up/user',data,{headers:{'Content-Type':"application/json"},responseType:'text'})
  }
  deleteData(url:string,id:string){
    let prams=new HttpParams().set('name',id)
    console.log(prams.get('name'))
    return this.http.delete<Friends[]>(url,{params:prams})
  }
  updateData(data:any){
    return this.http.put<Friends[]>('http://localhost:3003/friends',data)
  }
  unauthPart(){
    return this.http.get('http://localhost:3003/friends/un',{observe:'body'})
  }
  postMethod(url:string,data:any){
    return this.http.post(url,data,{observe:'body',responseType:'text'}).pipe(catchError(this.errorHandler))
  }
}
export interface Friends{
  name:string,place:string
}
