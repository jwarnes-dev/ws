import { Component } from '@angular/core';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.scss'],
  standalone: false
})
export class DevelopersComponent {
  
  installationMarkdown = `
# Getting Started with Angular Willow Library

## Prerequisites

### Node.js Version Management with NVM

This library requires Node.js version 16 or higher. If you need to manage multiple Node.js versions, we recommend using NVM (Node Version Manager).

#### Installing NVM (Windows)

1. Download and install nvm-windows from: https://github.com/coreybutler/nvm-windows/releases
2. Open a new command prompt or PowerShell as Administrator
3. Install and use the recommended Node.js version:

\`\`\`bash
nvm install 18.19.0
nvm use 18.19.0
\`\`\`

## Installation

### Install the Angular Willow Library

\`\`\`bash
npm install @wellmark/angular-willow
\`\`\`

### Import Styles

Add the Willow styles to your \`angular.json\` file:

\`\`\`json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@wellmark/angular-willow/src/styles/willow-vars.scss",
              "src/styles.scss"
            ]
          }
        }
      }
    }
  }
}
\`\`\`

Or import directly in your component or global styles:

\`\`\`scss
@import '~@wellmark/angular-willow/src/styles/willow-vars.scss';
\`\`\`

## Additional Configuration

### Customizing CSS Variables

You can override the default Willow design tokens by setting CSS custom properties:

\`\`\`scss
:root {
  --text-Willow-color-blue: #2C5282;
  --component-table-willow-header-fill: #1A365D;
  --component-table-willow-stripe-fill: #F7FAFC;
}
\`\`\`

### TypeScript Configuration

Ensure your \`tsconfig.json\` includes the necessary compiler options:

\`\`\`json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "lib": ["ES2022", "DOM"],
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
\`\`\`

## Troubleshooting

### Common Issues

1. **Styles not loading**: Make sure you've imported the Willow styles in your \`angular.json\` or component
2. **TypeScript errors**: Ensure you're using Angular 15+ and have the correct peer dependencies
3. **Custom table classes not working**: Verify you've imported the Willow styles and are using the correct class names

### Getting Help

For additional support, please refer to the library documentation or create an issue in the project repository. 
`;

  constructor() { }
} 