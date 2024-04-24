import { ResolveFn, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const titlew:ResolveFn<string>=()=>Promise.resolve('new-toitle')
export const routes: Routes = [
    
    {path:'',component:AppComponent},
    {path:'Login/error',redirectTo:'Login',pathMatch:'full'},
    {path:'Login',component:LoginComponent,children:[
        {path:'kk',component:AppComponent,title:titlew}
    ]},{path:'**',component:PageNotFoundComponent},
];

