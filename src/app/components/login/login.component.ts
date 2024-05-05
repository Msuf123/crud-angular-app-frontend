import { CSP_NONCE, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, of } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  link:string
  googleLink:string
  constructor(){
    const searchPrmas=new URLSearchParams({client_id:'Ov23ctlxK38f77XvveHD',scope:'user:email'})
    const googleSeachPrams=new URLSearchParams({client_id:'368385051580-u3msjhttd70hqch84gv090n25tburobo.apps.googleusercontent.com',redirect_uri:'http://localhost:4200/google/callback',scope:'https://www.googleapis.com/auth/userinfo.email',response_type:'token'})
     this.link=new URL('https://github.com/login/oauth/authorize?'+searchPrmas.toString()).toString() 
     this.googleLink=new URL(' https://accounts.google.com/o/oauth2/auth?'+googleSeachPrams.toString()).toString()
     console.log(this.googleLink)
  }
}
//368385051580-u3msjhttd70hqch84gv090n25tburobo.apps.googleusercontent.com
