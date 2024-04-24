import { ResolveFn, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
const titlew:ResolveFn<string>=()=>Promise.resolve('new-toitle')
export const routes: Routes = [
    {path:'',component:HomePageComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterUserComponent},
    {path:'**',component:PageNotFoundComponent}
];

