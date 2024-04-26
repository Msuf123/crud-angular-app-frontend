import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


   

export default function maxLength(maxLength:number):ValidatorFn{
     return (control:AbstractControl<any, any>):ValidationErrors | null=>{
           const valueOfInput:string=control.value
           if(valueOfInput.length<maxLength){
            return {length:'Atleat 8 characters'}
           }
           else{
            return null
           }
     }
  }

  export  function specialCharacter(control:AbstractControl):ValidationErrors|null{
    if(1<2){
       return null
    }
    else{
     return {correctPassword:'donot have correct chars'}
    }
  }

