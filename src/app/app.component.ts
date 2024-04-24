import { Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FetchDataService, Friends } from './services/fetch-data.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { URL } from './services/url-of-server/url-backend.service';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { DeleteFriendsComponent } from './delete-friends/delete-friends.component';
import { UpdateFriendComponent } from './update-friend/update-friend.component';
import { FriendsService } from './services/current-list-of-friends/friends.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
 
  title = 'client';
}
