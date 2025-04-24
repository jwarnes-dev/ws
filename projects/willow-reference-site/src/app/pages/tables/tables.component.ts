import { Component } from '@angular/core';
import { TypographyVariant } from 'angular-willow';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  constructor() { }
  type = TypographyVariant;
} 