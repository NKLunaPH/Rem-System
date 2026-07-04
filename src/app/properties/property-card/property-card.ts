import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-card',
  imports: [CommonModule],
  templateUrl: './property-card.html',
  styleUrl: './property-card.scss'
})
export class PropertyCard {
  @Input() property!: any;
}
