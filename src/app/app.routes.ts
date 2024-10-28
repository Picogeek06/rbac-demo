import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent  },
    { path: '**', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
];
