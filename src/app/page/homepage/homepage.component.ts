import { Component } from '@angular/core';
import { ButtonComponent } from '../../component/atom/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  data: string[] = ['Andreas', 'Caesar', 'Kurniawan'];
}
