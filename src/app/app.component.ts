import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HousingLocationComponentComponent } from './housing-location-component/housing-location-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterOutlet,
    HomeComponent,
    HousingLocationComponentComponent,
  ],
  // templateUrl: './app.component.html',
  template: `<main>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn Angular';
}
