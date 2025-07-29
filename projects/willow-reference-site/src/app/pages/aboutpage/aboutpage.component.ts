import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.scss'],
  standalone: false
})
export class AboutpageComponent {
  constructor() { }
  type = TypographyVariant;
} 