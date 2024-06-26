import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { FetchDataService, Friends } from '../../services/fetch-data.service';
import { FriendsService } from '../../services/current-list-of-friends/friends.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AddFriendsComponent } from '../add-friends/add-friends.component';
import { DeleteFriendsComponent } from '../delete-friends/delete-friends.component';
import { UpdateFriendComponent } from '../update-friend/update-friend.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AddFriendsComponent,DeleteFriendsComponent,UpdateFriendComponent,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  providers:[FriendsService,HttpClient,FetchDataService,{provide:URL,useValue:'http://localhost:3000'}]
})
export class HomePageComponent implements OnInit {
  currentFriends:Friends[]=[]
  ngOnInit(): void {
    console.log('hello')
  }
  constructor(private request:FetchDataService,@Inject(URL) private url:string,private store:FriendsService){
    
    //this.request.unauthPart().subscribe((a)=>console.log(a,'ll'))
    this.store.friendList.subscribe((data)=>{console.log(data);this.currentFriends=data})
    this.request.getData().subscribe((response)=>store.friendList.next(response))
  }
}
