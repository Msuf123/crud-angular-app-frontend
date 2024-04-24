import { Component, Inject } from '@angular/core';
import { FetchDataService, Friends } from '../services/fetch-data.service';
import { FriendsService } from '../services/current-list-of-friends/friends.service';
import { HttpClient } from '@angular/common/http';
import { AddFriendsComponent } from '../add-friends/add-friends.component';
import { DeleteFriendsComponent } from '../delete-friends/delete-friends.component';
import { UpdateFriendComponent } from '../update-friend/update-friend.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AddFriendsComponent,DeleteFriendsComponent,UpdateFriendComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers:[FriendsService,HttpClient,FetchDataService,{provide:URL,useValue:'http://localhost:3000'}]
})
export class HomePageComponent {
  currentFriends:Friends[]=[]

  constructor(private request:FetchDataService,@Inject(URL) private url:string,private store:FriendsService){
    this.store.friendList.subscribe((data)=>{console.log(data);this.currentFriends=data})
    this.request.checkServer().subscribe((response)=>console.log(response))
    this.request.getData().subscribe((response)=>store.friendList.next(response))
  }
}
