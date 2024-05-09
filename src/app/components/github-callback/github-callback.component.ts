import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchDataService } from '../../services/fetch-data.service';
import { ErrorService } from '../../services/error/error.service';

@Component({
  selector: 'app-github-callback',
  standalone: true,
  imports: [],
  templateUrl: './github-callback.component.html',
  styleUrl: './github-callback.component.css'
})
export class GithubCallbackComponent {
  constructor(private router:Router,private request:FetchDataService,private showError:ErrorService){}
  ngOnInit(){
    const code=new URL(this.router.url,'http://localhost:4200').searchParams.get('code')
    this.request.postMethod('http://localhost:3003/sign-up/githubVerigyUrl',{code}).subscribe((a)=>{
     
      const redirectFail=()=>{
       
        this.router.navigate(['/login'])
        this.showError.displayError()
      }
      const successRedirect=()=>{

      }
      a==='Something bad happened; please try again later.'?redirectFail():this.router.navigate(['/'])
    })
  }
}
