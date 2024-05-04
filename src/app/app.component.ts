import { Component, Inject } from '@angular/core';
import { RouterLink,Router,Event, RouterLinkActive, RouterOutlet, ResolveStart, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { FetchDataService, Friends } from './services/fetch-data.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { URL } from './services/url-of-server/url-backend.service';
import { authGuardGuard } from './auth-guard/auth-guard.guard';
import { FriendsService } from './services/current-list-of-friends/friends.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
  
})
export class AppComponent {
      constructor(private router:Router){
        this.router.events.subscribe((event:Event)=>{
          if(event instanceof NavigationStart){
            console.log('Navigaation started',event)
          }
          else if(event instanceof NavigationEnd){
             console.log('Naviagtion end')
          }
          else if(event instanceof NavigationCancel){
            console.log('Can no acc4ss')
          }
          else if(event instanceof NavigationError){
            console.log('Naviagtion completed')
          }
        })
      }
    
    
  
  title = 'client';
}
