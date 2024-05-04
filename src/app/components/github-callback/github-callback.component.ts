import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-callback',
  standalone: true,
  imports: [],
  templateUrl: './github-callback.component.html',
  styleUrl: './github-callback.component.css'
})
export class GithubCallbackComponent {
  constructor(private router:Router){}
  ngOnInit(){
    new URL(this.router.url,'http://localhost:4200').searchParams.get('code')
  }
}
