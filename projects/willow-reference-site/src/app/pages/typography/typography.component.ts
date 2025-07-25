import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
  standalone: false
})
export class TypographyComponent {
  constructor() { }
  type = TypographyVariant;
} 