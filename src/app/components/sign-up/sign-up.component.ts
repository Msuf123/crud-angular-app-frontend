import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AvailableUsernameService } from '../../services/available-username/available-username.service';
import minLength, { specialCharacter } from '../../services/password-checker/password-checker.service';
import { ColorDirectiveDirective } from '../../directives/color-directive/color-directive.directive';
import { TemplateDrivenDirective } from '../../services/available-username/template-driven.directive';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,ColorDirectiveDirective,TemplateDrivenDirective,FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
 formBuilder=inject(FormBuilder)
 passwordError:PasswordError<boolean>
 templatePassword=''
 emailError:EmailError<boolean>={email:false,required:false}
 emailTaken:boolean=false
 loading:boolean=false
 emailAvailabe=false
 signUpForm=this.formBuilder.group({
  userId:new FormControl('',{asyncValidators:[this.asynValidator.validate.bind(this.asynValidator)]})
  ,password:['',[minLength(8),specialCharacter]]
 })
 logerFunction(){
  console.log(this.templatePassword)
 }
 constructor(private asynValidator:AvailableUsernameService){
  this.passwordError={minLength:true,specialCharacter:true}
  this.signUpForm.valueChanges.subscribe(()=>{
    this.signUpForm.get('userId')?.statusChanges.subscribe((a)=>{
      
     if(a==='INVALID'){
      this.emailTaken=true
      this.loading=false
      this.emailAvailabe=false
     }
     else if(a==='PENDING'){
      this.emailTaken=false
      this.loading=true;
      this.emailAvailabe=false
     }
     else{
      this.emailTaken=false
      this.loading=false
      this.emailAvailabe=true
     }
    })
    this.emailError=this.signUpForm.get('userId')?.hasError('required')?{email:false,required:true}:{email:false,required:false}
    this.emailError=this.signUpForm.get('userId')?.hasError('email')?{email:true,required:false}:this.emailError
    this.passwordError=this.signUpForm.get('password')?.hasError('length')?{...this.passwordError,minLength:true}:{...this.passwordError,minLength:false}
    this.passwordError=this.signUpForm.get('password')?.hasError('correctPassword')?{...this.passwordError,specialCharacter:true}:{...this.passwordError,specialCharacter:false}
  })
 }
 
 formSubmitted(){
  console.log(this.signUpForm.value)
 }
 
}
interface EmailError<G>{
 email:G,
 required:G
}
interface PasswordError<T>{
  minLength:T,
  specialCharacter:T,
  
}