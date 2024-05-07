import { Component, inject } from '@angular/core';
import { ErrorService } from '../../services/error/error.service';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  toogleError=inject(ErrorService)
  crossClick(){
    this.toogleError.cutError()
  }
}
