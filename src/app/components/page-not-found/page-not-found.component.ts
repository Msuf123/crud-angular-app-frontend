import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {
constructor(private router:Router){
  let path='/google/callback#access_token=ya29.a0AXooCgsdOZhVP9-2MVF1X0lbBg0qVzaQbrBpbQTnkp0MqXxSoeSmX47KsfUkuWgwqwGIngXjG9dkOJcO-SQGS6SqfP4RUZB9fybBtNDkYZ28ble5-EmHRlTPoI5wv5f3blPCM8PP5IplsNh-9PMOx3W4wp2x28a19QaCgYKASkSARESFQHGX2Mi1WKgnNusqumF11xlyAj3fw0169&token_type=Bearer&expires_in=3599&scope=email%20https://www.googleapis.com/auth/userinfo.email%20openid&authuser=0&prompt=consent'
  console.log(this.router.url)
  const url =new URL(path,'http://localhost:4200/login')
  console.log(url.searchParams,'http://localhost:4200/login')
}
}
