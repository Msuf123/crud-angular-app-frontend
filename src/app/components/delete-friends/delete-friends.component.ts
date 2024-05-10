import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FetchDataService } from '../../services/fetch-data.service';
import { FriendsService } from '../../services/current-list-of-friends/friends.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-delete-friends',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delete-friends.component.html',
  styleUrl: './delete-friends.component.css',
  providers:[{provide:URL,useValue:'http://localhost:3003/friends'},FetchDataService]
})
export class DeleteFriendsComponent {
  constructor(private formBuilder:FormBuilder,@Inject(URL) private url:string,private request:FetchDataService,private store:FriendsService,private nav:Router){}
  form=this.formBuilder.group({
    name:['']
  })
  urlOfDeleteRequest?:string
  submitData(){
    this.urlOfDeleteRequest=`${this.form.value.name}`
    this.request.deleteData(this.url,this.urlOfDeleteRequest).subscribe((response)=>{
      response==='Something bad happened; please try again later.'?this.nav.navigate(['/login']):this.store.friendList.next(JSON.parse(response))
    })
  }
}
