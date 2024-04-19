import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchDataService } from './services/fetch-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  ,providers:[FetchDataService]
})
export class AppComponent {
  constructor(private request:FetchDataService){

  }
  fetchDataFromServer(){
   this.request.getData().subscribe((response)=>console.log(response))
  }
  title = 'client';
}
