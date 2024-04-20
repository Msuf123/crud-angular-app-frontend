import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-friends',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './delete-friends.component.html',
  styleUrl: './delete-friends.component.css'
})
export class DeleteFriendsComponent {
  constructor(private formBuilder:FormBuilder){}
  form=this.formBuilder.group({
    name:['']
  })
  submitData(){
    
    console.log(this.form.value)
  }
}
