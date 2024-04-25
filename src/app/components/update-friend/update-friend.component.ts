import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FetchDataService } from '../../services/fetch-data.service';
import { FriendsService } from '../../services/current-list-of-friends/friends.service';


@Component({
  selector: 'app-update-friend',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-friend.component.html',
  styleUrl: './update-friend.component.css',
  providers:[FetchDataService]
})
export class UpdateFriendComponent {
  constructor(private formBuilder:FormBuilder,private request:FetchDataService,private store:FriendsService){}
  form=this.formBuilder.group({
    name:[''],
    place:['']
  })
  submitData(){
    this.request.updateData(this.form.value).subscribe((response)=>this.store.friendList.next(response))
    
  }
}
