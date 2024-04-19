import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  getData(){
    return this.http.get<Friends[]>('http://localhost:3003/friends',{observe:'body'}).pipe(retry(3),catchError(this.handelError))

  }
}
export interface Friends{
  name:string,place:string
}
