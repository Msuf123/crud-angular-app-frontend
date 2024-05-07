import { ApplicationConfig, InjectionToken, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CustormInterceptor } from './services/interseptor/interseptor.service';
import { HttpBackend, HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { FetchDataService } from './services/fetch-data.service';
import { URL } from './services/url-of-server/url-backend.service';
export const appConfig: ApplicationConfig = {
  
  providers: [importProvidersFrom(HttpClientModule),{provide:URL,useValue:'http://localhost:3003'},provideRouter(routes),CustormInterceptor,FetchDataService,HttpClient],
};
 