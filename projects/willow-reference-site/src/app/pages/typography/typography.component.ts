import { Component } from '@angular/core';
import { TypographyVariant } from 'angular-willow';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent {
  constructor() { }
  type = TypographyVariant;
} 