import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CustormInterceptor } from './services/interseptor/interseptor.service';
import { HttpBackend, HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FetchDataService } from './services/fetch-data.service';

export const appConfig: ApplicationConfig = {
  
  providers: [importProvidersFrom(HttpClientModule),provideRouter(routes),CustormInterceptor,FetchDataService,HttpClient],
};
 