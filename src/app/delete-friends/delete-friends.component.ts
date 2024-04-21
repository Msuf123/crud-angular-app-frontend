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
  urlOfDeleteRequest?:string
  submitData(){
    this.urlOfDeleteRequest=`${this.url}?name=${this.form.value.name}`
    console.log(this.urlOfDeleteRequest)
    this.request.deleteData(this.urlOfDeleteRequest).subscribe((response)=>this.store.friendList.next(response))
  }
}
