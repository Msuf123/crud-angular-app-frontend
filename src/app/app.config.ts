import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CustormInterceptor } from './services/interseptor/interseptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),CustormInterceptor]
};
