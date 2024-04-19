import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchDataService, Friends } from './services/fetch-data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoggerService } from './services/logger/logger.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  ,providers:[FetchDataService]
})
export class AppComponent {
  currentHeros:Friends[]=[]
  constructor(private request:FetchDataService,private logger:LoggerService){

  }

  fetchDataFromServer(){
    this.logger.log()
   this.request.getData().subscribe((response)=>this.currentHeros=response)
  }
  title = 'client';
}
