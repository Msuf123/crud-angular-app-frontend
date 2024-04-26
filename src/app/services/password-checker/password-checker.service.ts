import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


   

export default function minLength(maxLength:number):ValidatorFn{
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
   const specialCharacters='@'
   const arrayOfChars=[]
   for(let i=0;i<control.value.length;i++){
     arrayOfChars.push(control.value[i])
   }
    if(arrayOfChars.includes(specialCharacters)){
       return null
    }
    else{
     return {correctPassword:'donot have correct chars'}
    }
  }

