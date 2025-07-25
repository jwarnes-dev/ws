import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: false
})
export class CardComponent {
  constructor() { }
  type = TypographyVariant;

  // Background color examples for willow-card
  primaryColor = '#4A7390';
  lightColor = '#F3F9FF';
  grayColor = '#C2C2C3';
  whiteColor = '#FFFFFF';
} 