import { Component } from '@angular/core';
import { AppHeaderComponent } from '../app-header/app-header.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AppHeaderComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  overlayActive: boolean = false;

  enableOverlay() {
    console.log('overlay');
    this.overlayActive = !this.overlayActive;
  }

  openModal() {
    //TODO make modal and open on click
  }

}
