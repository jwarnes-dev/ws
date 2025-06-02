import { Component } from '@angular/core';
import { TypographyVariant } from 'angular-willow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor() {}
  // Expose the enum in the template if needed
  type = TypographyVariant;
} 