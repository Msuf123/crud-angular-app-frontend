import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FetchDataService } from '../services/fetch-data.service';
import { FriendsService } from '../services/current-list-of-friends/friends.service';

@Component({
  selector: 'app-add-friends',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-friends.component.html',
  styleUrl: './add-friends.component.css'
})
export class AddFriendsComponent {
  friend=this.fromBuilder.group({
     name:[''],
     place:['']
  })
  submitData(){
    this.request.sendData(this.friend.value).subscribe((response)=>this.store.friendList.next(response))
  }
  constructor(private fromBuilder:FormBuilder,private request:FetchDataService,private store:FriendsService){
     this.friend.valueChanges.subscribe((a)=>console.log(a))
     console.log(this.friend.value)
  }
  
  
}
