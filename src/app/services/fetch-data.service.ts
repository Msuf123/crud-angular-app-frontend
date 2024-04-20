import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchDataService {

  private handelError(error:HttpErrorResponse){
  
  if(error.status===0){
  
    console.log('Cleint side eror ',error.error)
  }
  else{
    console.log('Server side error',error.error)
  }
  return  throwError(()=>new Error('Somthing wnet wrong'))
 }

  constructor(private http:HttpClient) { }
  checkServer(){
    return this.http.get('http://localhost:3003/',{observe:'body',responseType:'text'})
  }
  getData(){
    return this.http.get<Friends[]>('http://localhost:3003/friends',{observe:'body'}).pipe(retry(3),catchError(this.handelError))

  }
  sendData(data:any){
    return this.http.post<Friends[]>('http://localhost:3003/friends/add',data,{headers:{'Content-Type':"application/json"},responseType:'json'})
  }
}
export interface Friends{
  name:string,place:string
}
