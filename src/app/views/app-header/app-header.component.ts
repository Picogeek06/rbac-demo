import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  standalone: true,
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  @Input() selectedTab:any;


  ngOnInit() {
    console.log('tab', this.selectedTab);
  }

}
