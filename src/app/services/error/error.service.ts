import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  show=new BehaviorSubject<boolean>(false)
  displayError(){
    this.show.next(true)
  }
  cutError(){
    this.show.next(false)
  }
}
