import { ResolveFn, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { authGuardGuard } from './auth-guard/auth-guard.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GithubCallbackComponent } from './components/github-callback/github-callback.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { GoogleCallbackComponent } from './components/google-callback/google-callback.component';
const titlew:ResolveFn<string>=()=>Promise.resolve('new-toitle')
export const routes: Routes = [
    {path:'',component:HomePageComponent,canActivate:[authGuardGuard]},
    {path:'login',component:LoginComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'register',component:RegisterUserComponent},
    {path:'github/callback',component:GithubCallbackComponent},
    {path:'google/callback',component:GoogleCallbackComponent},
    {path:'**',component:PageNotFoundComponent},
    
];
// http://localhost:4200/github/callback
// Ov23ctlxK38f77XvveHD 
