import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AvailableUsernameService } from '../../services/available-username/available-username.service';
import maxLength from '../../services/password-checker/password-checker.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 formBuilder=inject(FormBuilder)
 emailError:{email:boolean,required:boolean}={email:false,required:false}
 signUpForm=this.formBuilder.group({
  userId:['',[Validators.required,Validators.email,this.asynValidator.validate.bind(this.asynValidator)]]
  ,password:['',[maxLength(8)]]
 })
 constructor(private asynValidator:AvailableUsernameService){
  this.signUpForm.valueChanges.subscribe(()=>{
    console.log(this.signUpForm.get('userId')?.errors)
    this.emailError=this.signUpForm.get('userId')?.hasError('required')?{email:false,required:true}:{email:false,required:false}
    this.emailError=this.signUpForm.get('userId')?.hasError('email')?{email:true,required:false}:this.emailError
  })
 }
 
 formSubmitted(){
  console.log(this.signUpForm.value)
 }
 
}
