import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { MessageComponent } from './message/message.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { LoginComponent } from './login/login.component';

import { RestApiService } from './rest-api.service';
import { DataService } from './data.service';
import { AuthguardService } from './auth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessageComponent,
    RegisterationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [RestApiService, DataService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
