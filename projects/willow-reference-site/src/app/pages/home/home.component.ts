import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent {
  constructor() {}
  // Expose the enum in the template if needed
  type = TypographyVariant;
} 