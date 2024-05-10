import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FetchDataService } from '../../services/fetch-data.service';
import { FriendsService } from '../../services/current-list-of-friends/friends.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-friend',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-friend.component.html',
  styleUrl: './update-friend.component.css',
  providers:[FetchDataService]
})
export class UpdateFriendComponent {
  constructor(private formBuilder:FormBuilder,private request:FetchDataService,private store:FriendsService,private nav:Router){}
  form=this.formBuilder.group({
    name:[''],
    place:['']
  })
  submitData(){
    this.request.updateData(this.form.value).subscribe((response)=>{
      response==='Something bad happened; please try again later.'?this.nav.navigate(['/login']):this.store.friendList.next(JSON.parse(response))
   
    })
    
  }
}
