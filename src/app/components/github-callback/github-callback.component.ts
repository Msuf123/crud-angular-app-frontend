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
    console.log(this.router.url)
  }
}
