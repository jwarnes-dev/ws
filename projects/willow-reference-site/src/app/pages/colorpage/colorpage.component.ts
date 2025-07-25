import { Component } from '@angular/core';
import { TypographyVariant } from '@wellmark/angular-willow';

@Component({
  selector: 'app-colorpage',
  templateUrl: './colorpage.component.html',
  styleUrls: ['./colorpage.component.scss']
})
export class ColorpageComponent {
  constructor() { }
  type = TypographyVariant;
} 