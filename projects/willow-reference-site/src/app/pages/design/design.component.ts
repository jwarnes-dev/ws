import { Component } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent {

  designContent = `
# Design Principles

## Coming Soon

This page will contain our design principles, guidelines, and best practices for using the Willow Design System.

### What to expect:
- **Design Tokens**: Color palettes, typography scales, spacing systems
- **Layout Guidelines**: Grid systems, breakpoints, and responsive design patterns  
- **Component Guidelines**: Usage patterns and design specifications
- **Accessibility Standards**: WCAG compliance and inclusive design practices
- **Brand Guidelines**: Logo usage, voice and tone, imagery guidelines

### Design Resources
We're working on providing Figma libraries, Sketch files, and other design resources to help designers and developers work together seamlessly.

Stay tuned for updates!
`;

  constructor() { }
} 