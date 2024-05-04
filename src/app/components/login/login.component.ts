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

  constructor(){
    const searchPrmas=new URLSearchParams({client_id:'Ov23ctlxK38f77XvveHD',scope:'user:email'})
    
     this.link=new URL('https://github.com/login/oauth/authorize?'+searchPrmas.toString()).toString()
    
  }
}
