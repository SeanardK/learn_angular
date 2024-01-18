import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './housing-location-component.component.html',
  styleUrl: './housing-location-component.component.scss',
})
export class HousingLocationComponentComponent {
  @Input() housingLocation!: HousingLocation;
}
