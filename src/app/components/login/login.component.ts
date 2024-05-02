import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, of } from 'rxjs';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}
