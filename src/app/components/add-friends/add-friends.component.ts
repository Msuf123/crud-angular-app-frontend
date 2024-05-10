import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FetchDataService } from '../../services/fetch-data.service';
import { FriendsService } from '../../services/current-list-of-friends/friends.service';
import { Router } from '@angular/router';

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
    this.request.postMethod('http://localhost:3003/friends/add',this.friend.value).subscribe((response)=>{
      let success=()=>{this.store.friendList.next(JSON.parse(response))}
      response==='Something bad happened; please try again later.'?this.nav.navigate(['/login']):success()
    })
  }
  
  constructor(private fromBuilder:FormBuilder,private request:FetchDataService,private store:FriendsService,private nav:Router){
     this.friend.valueChanges.subscribe((a)=>console.log(a))
     
  }
  
  
}
