import { CommonModule } from '@angular/common';
import { Component, Inject, Injector, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AvailableUsernameService } from '../../services/available-username/available-username.service';
import minLength, { specialCharacter } from '../../services/password-checker/password-checker.service';
import { ColorDirectiveDirective } from '../../directives/color-directive/color-directive.directive';
import { FetchDataService } from '../../services/fetch-data.service';
import { URL } from '../../services/url-of-server/url-backend.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,ColorDirectiveDirective],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  providers:[{provide:URL,useValue:'http://localhost:300'}]
})
export class SignUpComponent {
  request=inject(FetchDataService)
 formBuilder=inject(FormBuilder)
 passwordError:PasswordError<boolean>
 emailError:EmailError<boolean>={email:false,required:false}
 emailTaken:boolean=false
 loading:boolean=false
 emailAvailabe=false
 signUpForm=this.formBuilder.group({
  userId:new FormControl('',{validators:[Validators.email],asyncValidators:[this.asynValidator.validate.bind(this.asynValidator)],updateOn:'change'})
  ,password:['',[minLength(8),specialCharacter]]
 })
 constructor(private asynValidator:AvailableUsernameService){

  this.passwordError={minLength:true,specialCharacter:true}
  this.signUpForm.valueChanges.subscribe(()=>{
    this.signUpForm.get('userId')?.statusChanges.subscribe((a)=>{
      console.log(a)
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
   this.request.createFriends(this.signUpForm.value).subscribe((a)=>console.log(a))
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