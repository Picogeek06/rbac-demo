import { Component } from '@angular/core';
import { AppHeaderComponent } from "../app-header/app-header.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AppHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
