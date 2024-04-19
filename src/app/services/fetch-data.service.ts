import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface Friends{
  name:string,place:string
}
@Injectable({
  providedIn: 'root'
})

export class FetchDataService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<Friends[]>('http://localhost:3003/friends',{observe:'body'})
  }
}
