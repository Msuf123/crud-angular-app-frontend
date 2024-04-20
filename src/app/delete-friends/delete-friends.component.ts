import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-delete-friends',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delete-friends.component.html',
  styleUrl: './delete-friends.component.css',
  providers:[{provide:URL,useValue:'http://localhost:3003/friends'},FetchDataService]
})
export class DeleteFriendsComponent {
  constructor(private formBuilder:FormBuilder,@Inject(URL) private url:string,private request:FetchDataService){}
  form=this.formBuilder.group({
    name:['']
  })
  submitData(){
    this.url=`${this.url}?name=${this.form.value.name}`
    console.log(this.url)
    this.request.deleteData(this.url).subscribe((response)=>console.log(response))
  }
}
