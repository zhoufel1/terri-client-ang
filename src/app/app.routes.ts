import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './core/auth/pages/login/login.component';

export const routes: Routes = [
    {
        path: "", component: HomeComponent,
    },
    {
        path: "login",
        title: "Login",
        component: LoginComponent,
    }
];
