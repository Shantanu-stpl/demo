import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
// import { MaterialModule } from './material.module';
import { MatButtonModule, MatCardModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatMenuModule, MatSidenavModule, MatProgressBarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    DashboardComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule, 
    MatOptionModule, 
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
