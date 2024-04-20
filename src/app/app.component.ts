import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchDataService, Friends } from './services/fetch-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { URL } from './services/url-of-server/url-backend.service';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { DeleteFriendsComponent } from './delete-friends/delete-friends.component';
import { UpdateFriendComponent } from './update-friend/update-friend.component';
import { FriendsService } from './services/current-list-of-friends/friends.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule,AddFriendsComponent,DeleteFriendsComponent,UpdateFriendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  ,providers:[FetchDataService,{provide:URL,useValue:'http://localhost:3000'}]
})
export class AppComponent {
  currentFriends:Friends[]=[]
  constructor(private request:FetchDataService,@Inject(URL) private url:string,private store:FriendsService){
    this.store.friendList.subscribe((data)=>{console.log(data);this.currentFriends=data})
    this.request.checkServer().subscribe((response)=>console.log(response))
    this.request.getData().subscribe((response)=>store.friendList.next(response))
  }

  fetchDataFromServer(){
   
  }
  title = 'client';
}
