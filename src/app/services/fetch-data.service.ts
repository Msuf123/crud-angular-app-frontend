import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
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
    let headersOption=new HttpHeaders({Authorization:'my-token'})
   headersOption= headersOption.delete('Authorization')
    console.log(headersOption.get('Authorization'))
    return this.http.get<Friends[]>('http://localhost:3003/friends',{observe:'body',responseType:'json',headers:headersOption}).pipe(retry(3),catchError(this.handelError))

  }
  sendData(data:any){
    return this.http.post<Friends[]>('http://localhost:3003/friends/add',data,{headers:{'Content-Type':"application/json"},responseType:'json'})
  }
  deleteData(url:string,id:string){
    let prams=new HttpParams().set('name',id)
    console.log(prams.get('name'))
    return this.http.delete<Friends[]>(url,{params:prams})
  }
  updateData(data:any){
    return this.http.put<Friends[]>('http://localhost:3003/friends',data)
  }
}
export interface Friends{
  name:string,place:string
}
