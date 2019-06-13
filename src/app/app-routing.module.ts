import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import {ListUserComponent} from "./list-user/list-user.component";
import {LoginComponent} from "./login/login.component";
import {RegisterationComponent} from "./registeration/registeration.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'register', component: RegisterationComponent},
{ path: '**', component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
