import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './auth-guard.service';


const routes: Routes = [
  {
path: '',
component: HomeComponent
},
{
  path: 'register',
  component: RegisterationComponent,
  canActivate: [AuthguardService]
  },
{
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthguardService]
 },
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
