import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/auth/signup/signup.component';
import { LoginComponent } from './components/auth/login/login.component';
import { BusinessListComponent } from './components/business/business-list/business-list.component';
import { RegisterBusinessComponent } from './components/business/register-business/register-business.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'services', component:HomeComponent},
  {path:'business', component:BusinessListComponent},
  {path:'register-business', component:RegisterBusinessComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
