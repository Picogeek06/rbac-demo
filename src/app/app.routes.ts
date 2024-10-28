import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent  },
    { path: '**', component: DashboardComponent },
    { path: '', component: DashboardComponent },
];
