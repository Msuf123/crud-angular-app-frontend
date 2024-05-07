import { CSP_NONCE, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { map, of } from 'rxjs';
import { FetchDataService } from '../../services/fetch-data.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  link:string
  googleLink:string
  groupOfForms=this.foms.group({
    username:[''],
    password:['']
  })
  fromSubmitted(){
    this.request.postMethod('http://localhost:3003/sign-up/verifyUserName',this.groupOfForms.value).subscribe(
      
    (a)=>{
      console.log(a)
      a==='invalid'?this.groupOfForms.setErrors({status:'Wrong Id password'}):console.log('Correct credintail')
    })
  }
  constructor(private foms:FormBuilder,private request:FetchDataService,private router:Router){
    this.groupOfForms.statusChanges.subscribe((a)=>{
      console.log(a,'i changed')
    })
    const searchPrmas=new URLSearchParams({client_id:'Ov23ctlxK38f77XvveHD',scope:'user:email'})
    const googleSeachPrams=new URLSearchParams({client_id:'368385051580-u3msjhttd70hqch84gv090n25tburobo.apps.googleusercontent.com',redirect_uri:'http://localhost:4200/google/callback',scope:'https://www.googleapis.com/auth/userinfo.email',response_type:'token'})
     this.link=new URL('https://github.com/login/oauth/authorize?'+searchPrmas.toString()).toString() 
     this.googleLink=new URL(' https://accounts.google.com/o/oauth2/auth?'+googleSeachPrams.toString()).toString()
     console.log(this.googleLink)
  }
}
//368385051580-u3msjhttd70hqch84gv090n25tburobo.apps.googleusercontent.com
