import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-header',
  standalone: true,
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

  constructor(private router: Router) {}

  @Input() selectedTab:any;

  logout() {
    this.router.navigate(['login']);
  }
}
