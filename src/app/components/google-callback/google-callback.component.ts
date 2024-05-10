import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';

@Component({
  selector: 'app-google-callback',
  standalone: true,
  imports: [],
  templateUrl: './google-callback.component.html',
  styleUrl: './google-callback.component.css'
})
export class GoogleCallbackComponent {
  accessToken
  constructor(private router:Router,private request:FetchDataService){
    
    this.accessToken=this.router.url.split('#')
    console.log(this.accessToken[1])
    const urlSeachPrams=new URLSearchParams(this.accessToken[1])
    const tokenToSend=urlSeachPrams.get('access_token')
    request.postMethod('http://localhost:3003/sign-up/googleVerifyUrl',{token:tokenToSend}).subscribe((res)=>{
      console.log(res)
    })
  }
}
