import { Component, Inject, inject } from '@angular/core';
import { RouterLink,Router,Event, RouterLinkActive, RouterOutlet, ResolveStart, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { FetchDataService, Friends } from './services/fetch-data.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { URL } from './services/url-of-server/url-backend.service';
import { authGuardGuard } from './auth-guard/auth-guard.guard';
import { FriendsService } from './services/current-list-of-friends/friends.service';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { ErrorService } from './services/error/error.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoadingComponent,CommonModule,ErrorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[]
  
})
export class AppComponent {
  showError=inject(ErrorService)
  displayLoading=false
  displayError=this.showError.show.value
      constructor(private router:Router){
        this.showError.show.subscribe((a)=>{
          this.displayError=a
        })
        this.router.events.subscribe((event:Event)=>{
          if(event instanceof NavigationStart){
            this.displayLoading=true
            this.displayError=false
             }
          else if(event instanceof NavigationEnd){
             this.displayLoading=false
          }
          else if(event instanceof NavigationCancel){
            this.displayLoading=false
          }
          else if(event instanceof NavigationError){
            this.displayLoading=false
          }
        })
      }
    
    
  
  title = 'client';
}
