import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-friend',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-friend.component.html',
  styleUrl: './update-friend.component.css'
})
export class UpdateFriendComponent {
  constructor(private formBuilder:FormBuilder){}
  form=this.formBuilder.group({
    name:[''],
    place:['']
  })
  submitData(){
    
    console.log(this.form.value)
  }
}
