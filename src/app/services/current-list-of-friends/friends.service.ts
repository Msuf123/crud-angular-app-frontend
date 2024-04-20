import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Friends } from '../fetch-data.service';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }
  friendList=new Subject<Friends[]>()
}
