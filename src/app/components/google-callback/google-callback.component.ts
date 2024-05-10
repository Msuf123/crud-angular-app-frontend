import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';
import { ErrorService } from '../../services/error/error.service';

@Component({
  selector: 'app-google-callback',
  standalone: true,
  imports: [],
  templateUrl: './google-callback.component.html',
  styleUrl: './google-callback.component.css'
})
export class GoogleCallbackComponent {
  accessToken
  constructor(private router:Router,private request:FetchDataService,private showError:ErrorService){
    
    this.accessToken=this.router.url.split('#')
    console.log(this.accessToken[1])
    const urlSeachPrams=new URLSearchParams(this.accessToken[1])
    const tokenToSend=urlSeachPrams.get('access_token')
    request.postMethod('http://localhost:3003/sign-up/googleVerifyUrl',{token:tokenToSend}).subscribe((res)=>{
      const redirectFail=()=>{
       
        this.router.navigate(['/login'])
        this.showError.displayError()
         
       }
       const successRedirect=(token:string)=>{
         localStorage.setItem('my-token',token)
         console.log('Setting token',localStorage.getItem('my-token'))
         this.router.navigate(['/'])
       }
       res==='Something bad happened; please try again later.'?redirectFail():successRedirect(res)
    })
  }
}
