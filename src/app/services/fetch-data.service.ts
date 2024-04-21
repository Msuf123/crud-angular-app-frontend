import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
    return this.http.get<Friends[]>('http://localhost:3003/friends',{observe:'body',responseType:'json',headers:new HttpHeaders({'Content-Type':  'application/json',Authorization: 'my-auth-token'})}).pipe(retry(3),catchError(this.handelError))

  }
  sendData(data:any){
    return this.http.post<Friends[]>('http://localhost:3003/friends/add',data,{headers:{'Content-Type':"application/json"},responseType:'json'})
  }
  deleteData(url:string){
    return this.http.delete<Friends[]>(url)
  }
  updateData(data:any){
    return this.http.put<Friends[]>('http://localhost:3003/friends',data)
  }
}
export interface Friends{
  name:string,place:string
}
