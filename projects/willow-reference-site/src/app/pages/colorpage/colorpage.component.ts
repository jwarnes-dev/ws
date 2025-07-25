import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

@Component({
  selector: 'app-colorpage',
  templateUrl: './colorpage.component.html',
  styleUrls: ['./colorpage.component.scss'],
  standalone: false
})
export class ColorpageComponent {
  constructor() { }
  type = TypographyVariant;
} 