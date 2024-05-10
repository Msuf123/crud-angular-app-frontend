import { CSP_NONCE, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { map, of } from 'rxjs';
import { FetchDataService } from '../../services/fetch-data.service';
import { ErrorService } from '../../services/error/error.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  showError=inject(ErrorService)
  link:string
  googleLink:string
  groupOfForms=this.foms.group({
    username:[''],
    password:['']
  })
  fromSubmitted(){
    console.log('Making request')
    this.request.postMethod('http://localhost:3003/sign-up/verifyUserName',this.groupOfForms.value).subscribe((a)=>{
      console.log(a)
      if(a==='Something bad happened; please try again later.'){
         this.showError.displayError()
         return null
      }
      const settingToken=(token:string)=>{
        localStorage.setItem('my-token',token)
        this.router.navigate(['/'])
      }
      a==='invalid'?this.groupOfForms.setErrors({status:'Wrong Id password'}):settingToken(a)
       return null
    })

  }
  constructor(private foms:FormBuilder,private request:FetchDataService,private router:Router){
    console.log(this.showError.show.value,'current value')
    this.showError.show.subscribe((a)=>{
      console.log(a,'subs event')
    })
    request.getRequest('http://localhost:3003/kk').subscribe((a)=>console.log(a))
    const searchPrmas=new URLSearchParams({client_id:'Ov23ctlxK38f77XvveHD',scope:'user:email'})
    const googleSeachPrams=new URLSearchParams({client_id:'368385051580-u3msjhttd70hqch84gv090n25tburobo.apps.googleusercontent.com',redirect_uri:'http://localhost:4200/google/callback',scope:'https://www.googleapis.com/auth/userinfo.email',response_type:'token'})
     this.link=new URL('https://github.com/login/oauth/authorize?'+searchPrmas.toString()).toString() 
     this.googleLink=new URL(' https://accounts.google.com/o/oauth2/auth?'+googleSeachPrams.toString()).toString()
     
  }
}
//368385051580-u3msjhttd70hqch84gv090n25tburobo.apps.googleusercontent.com
