import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
  userId:['',[Validators.required,Validators.email]]
  ,password:['']
 })
 constructor(){
  this.signUpForm.valueChanges.subscribe(()=>{
    this.emailError=this.signUpForm.get('userId')?.hasError('required')?{email:false,required:true}:{email:false,required:false}
    this.emailError=this.signUpForm.get('userId')?.hasError('email')?{email:true,required:false}:{email:false,required:false}
  })
 }
 
 formSubmitted(){
  console.log(this.signUpForm.value)
 }
 
}
