import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertService, AuthenticationService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,    
    DirectoryComponent, LoginComponent, RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [AlertService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
