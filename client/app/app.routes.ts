import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {DirectoryComponent} from './directory/directory.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

export const routes:Routes = [
	{path:'', redirectTo:'home', pathMatch: 'full'},
	{path: 'home', component: HomeComponent},
	{path: 'home/:name', component: HomeComponent},
	{path: 'directory', component: DirectoryComponent},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
]

export const router: ModuleWithProviders = RouterModule.forRoot(routes)