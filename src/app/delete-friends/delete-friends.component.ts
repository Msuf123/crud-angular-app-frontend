import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FetchDataService } from '../services/fetch-data.service';
import { FriendsService } from '../services/current-list-of-friends/friends.service';

@Component({
  selector: 'app-delete-friends',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delete-friends.component.html',
  styleUrl: './delete-friends.component.css',
  providers:[{provide:URL,useValue:'http://localhost:3003/friends'},FetchDataService]
})
export class DeleteFriendsComponent {
  constructor(private formBuilder:FormBuilder,@Inject(URL) private url:string,private request:FetchDataService,private store:FriendsService){}
  form=this.formBuilder.group({
    name:['']
  })
  submitData(){
    this.url='http://localhost:3003/friends'
    console.log(this.url)
    this.url=`${this.url}?name=${this.form.value.name}`
    console.log(this.url)
    this.request.deleteData(this.url).subscribe((response)=>this.store.friendList.next(response))
  }
}
