import { Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
    {path: '',   redirectTo: 'login', pathMatch: 'full' },
    {path: 'login', component: LoginComponent},
    {path: 'home', pathMatch: 'full', component: DashboardComponent},
    {path: '**', component: LoginComponent},
];