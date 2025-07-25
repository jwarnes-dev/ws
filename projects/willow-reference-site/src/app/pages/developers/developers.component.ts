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

#### Installing NVM (macOS/Linux)

\`\`\`bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# Restart your terminal or run:
source ~/.bashrc

# Install and use Node.js
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

## Basic Form Example

### Import Required Modules

\`\`\`typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <form [formGroup]="userForm" (ngSubmit)="onSubmit()" class="willow-form">
      <div class="form-group">
        <label for="firstName">First Name <span class="asterisk">*</span></label>
        <input 
          id="firstName"
          type="text" 
          formControlName="firstName"
          class="willow-input"
          [class.error]="userForm.get('firstName')?.invalid && userForm.get('firstName')?.touched">
        <div *ngIf="userForm.get('firstName')?.invalid && userForm.get('firstName')?.touched" 
             class="error-message">
          First name is required
        </div>
      </div>
      
      <div class="form-group">
        <label for="email">Email <span class="asterisk">*</span></label>
        <input 
          id="email"
          type="email" 
          formControlName="email"
          class="willow-input"
          [class.error]="userForm.get('email')?.invalid && userForm.get('email')?.touched">
        <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched" 
             class="error-message">
          Please enter a valid email address
        </div>
      </div>
      
      <button type="submit" class="willow-button willow-button-primary" [disabled]="userForm.invalid">
        Submit
      </button>
    </form>
  \`,
  styles: [\`
    .willow-form {
      max-width: 400px;
      margin: 0 auto;
    }
    
    .form-group {
      margin-bottom: 20px;
    }
    
    .willow-input {
      width: 100%;
      padding: 12px;
      border: 2px solid var(--component-forms-willow-field-default-stroke, #757575);
      border-radius: var(--component-forms-willow-input-corner-radius, 2px);
      font-family: var(--text-family-body, Roboto);
      font-size: var(--text-size-hidden-xs, 16px);
      
      &.error {
        border-color: var(--component-forms-willow-field-error-stroke, #B44242);
      }
      
      &:focus {
        outline: none;
        border-color: var(--text-Willow-color-blue, #4A7390);
      }
    }
    
    .willow-button {
      padding: var(--component-button-willow-layout-top-bottom-padding, 12px) var(--component-button-willow-layout-right-left-padding, 36px);
      border-radius: var(--component-button-willow-layout-corner-radius, 2px);
      font-family: var(--text-family-body, Roboto);
      font-size: var(--text-size-hidden-xs, 16px);
      cursor: pointer;
      border: none;
      
      &.willow-button-primary {
        background-color: var(--text-Willow-color-blue, #4A7390);
        color: var(--component-button-willow-primary-dark-default-text, #FFF);
        
        &:hover {
          background-color: var(--text-Willow-color-link, #005589);
        }
        
        &:disabled {
          background-color: var(--component-button-willow-disabled-all-disabled-fill, #F2F2F3);
          color: var(--component-button-willow-disabled-all-disabled-text, #4B4C4D);
          cursor: not-allowed;
        }
      }
    }
    
    .error-message {
      color: var(--component-forms-willow-field-error-stroke, #B44242);
      font-size: var(--text-size-hidden-xxs, 12px);
      margin-top: 4px;
    }
  \`]
})
export class UserFormComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
\`\`\`

## Table Component Usage

### Basic Table Example

\`\`\`typescript
import { Component } from '@angular/core';
import { TableComponent, Column, Row } from '@wellmark/angular-willow';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [TableComponent],
  template: \`
    <willow-table
      [columns]="columns"
      [rows]="users"
      rowStyle="stripes"
      headerStyle="heavy"
      density="normal">
    </willow-table>
  \`
})
export class UsersTableComponent {
  columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'firstName', headerName: 'First Name', sortable: true },
    { field: 'lastName', headerName: 'Last Name', sortable: true },
    { field: 'email', headerName: 'Email', sortable: true },
    { field: 'status', headerName: 'Status', sortable: false }
  ];

  users: Row[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', status: 'Inactive' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com', status: 'Active' }
  ];
}
\`\`\`

### Table with Custom Cell Templates

\`\`\`typescript
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TableComponent, Column, Row } from '@wellmark/angular-willow';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-advanced-table',
  standalone: true,
  imports: [TableComponent, CommonModule],
  template: \`
    <!-- Custom templates -->
    <ng-template #statusTemplate let-value let-row="row">
      <span [ngClass]="'status-badge status-' + value.toLowerCase()">
        {{ value }}
      </span>
    </ng-template>
    
    <ng-template #actionsTemplate let-value let-row="row">
      <button class="action-btn edit-btn" (click)="editUser(row)">
        Edit
      </button>
      <button class="action-btn delete-btn" (click)="deleteUser(row)">
        Delete
      </button>
    </ng-template>
    
    <ng-template #emailTemplate let-value let-row="row">
      <a [href]="'mailto:' + value" class="link">{{ value }}</a>
    </ng-template>

    <willow-table
      [columns]="columns"
      [rows]="users"
      [cellTemplates]="cellTemplates"
      rowStyle="lines"
      headerStyle="basic"
      density="normal">
    </willow-table>
  \`,
  styles: [\`
    .status-badge {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      
      &.status-active {
        background-color: #d4edda;
        color: #155724;
      }
      
      &.status-inactive {
        background-color: #f8d7da;
        color: #721c24;
      }
    }
    
    .action-btn {
      padding: 6px 12px;
      margin-right: 8px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      font-size: 12px;
      
      &.edit-btn {
        background-color: var(--text-Willow-color-blue, #4A7390);
        color: white;
        
        &:hover {
          background-color: var(--text-Willow-color-link, #005589);
        }
      }
      
      &.delete-btn {
        background-color: var(--component-button-willow-destructive-default-fill, #B44242);
        color: white;
        
        &:hover {
          background-color: #9a3636;
        }
      }
    }
  \`]
})
export class AdvancedTableComponent {
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;
  @ViewChild('actionsTemplate', { static: true }) actionsTemplate!: TemplateRef<any>;
  @ViewChild('emailTemplate', { static: true }) emailTemplate!: TemplateRef<any>;

  columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'firstName', headerName: 'First Name', sortable: true },
    { field: 'lastName', headerName: 'Last Name', sortable: true },
    { field: 'email', headerName: 'Email', sortable: true, templateKey: 'email' },
    { field: 'status', headerName: 'Status', sortable: false, templateKey: 'status' },
    { field: 'actions', headerName: 'Actions', sortable: false, templateKey: 'actions' }
  ];

  users: Row[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', status: 'Inactive' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com', status: 'Active' }
  ];

  cellTemplates: { [key: string]: TemplateRef<any> } = {};

  ngAfterViewInit() {
    this.cellTemplates = {
      'status': this.statusTemplate,
      'actions': this.actionsTemplate,
      'email': this.emailTemplate
    };
  }

  editUser(user: Row) {
    console.log('Edit user:', user);
    // Implement edit logic
  }

  deleteUser(user: Row) {
    console.log('Delete user:', user);
    // Implement delete logic
  }
}
\`\`\`

## Using Custom Table Styles

The Willow library now exposes reusable CSS classes with the \`willow-\` prefix that you can use to create custom tables without using the Angular component.

### HTML Structure for Custom Table

\`\`\`html
<div class="willow-table-container">
  <table class="willow-table willow-table-header-heavy willow-table-row-stripes willow-table-density-normal">
    <thead>
      <tr>
        <th class="willow-table-sortable">
          <div class="willow-table-header-content">
            Name
            <div class="willow-table-sort-icons">
              <span class="willow-table-sort-icon">
                <i class="willow-table-sort-both"></i>
              </span>
            </div>
          </div>
        </th>
        <th class="willow-table-sortable">
          <div class="willow-table-header-content">
            Email
            <div class="willow-table-sort-icons">
              <span class="willow-table-sort-icon">
                <i class="willow-table-sort-up"></i>
              </span>
            </div>
          </div>
        </th>
        <th>
          <div class="willow-table-header-content">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>john.doe@example.com</td>
        <td>
          <button class="willow-button willow-button-secondary">Edit</button>
        </td>
      </tr>
      <tr class="willow-table-row-odd">
        <td>Jane Smith</td>
        <td>jane.smith@example.com</td>
        <td>
          <button class="willow-button willow-button-secondary">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
\`\`\`

### Available Willow Table Classes

#### Container and Base Table
- \`willow-table-container\` - Responsive container with horizontal scrolling
- \`willow-table\` - Base table styling with Willow fonts and colors

#### Header Styles
- \`willow-table-header-basic\` - Light header with bottom border
- \`willow-table-header-heavy\` - Dark blue header background

#### Row Styles
- \`willow-table-row-lines\` - Borders between rows
- \`willow-table-row-stripes\` - Alternating row backgrounds
- \`willow-table-row-odd\` - Applies to odd rows for striped effect

#### Density Options
- \`willow-table-density-normal\` - Standard padding (12px top/bottom)
- \`willow-table-density-condensed\` - Compact padding (8px top/bottom)

#### Sorting Elements
- \`willow-table-sortable\` - Makes header clickable with hover effect
- \`willow-table-header-content\` - Flexbox container for header content
- \`willow-table-sort-icons\` - Container for sort indicators
- \`willow-table-sort-icon\` - Wrapper for sort arrows
- \`willow-table-sort-up\` - Upward arrow for ascending sort
- \`willow-table-sort-down\` - Downward arrow for descending sort
- \`willow-table-sort-both\` - Dual arrows for unsorted state

### Example: Custom Table with JavaScript Sorting

\`\`\`typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="willow-table-container">
      <table class="willow-table willow-table-header-basic willow-table-row-lines willow-table-density-normal">
        <thead>
          <tr>
            <th class="willow-table-sortable" (click)="sort('name')">
              <div class="willow-table-header-content">
                Name
                <div class="willow-table-sort-icons">
                  <span class="willow-table-sort-icon">
                    <i [ngClass]="getSortIconClass('name')"></i>
                  </span>
                </div>
              </div>
            </th>
            <th class="willow-table-sortable" (click)="sort('email')">
              <div class="willow-table-header-content">
                Email
                <div class="willow-table-sort-icons">
                  <span class="willow-table-sort-icon">
                    <i [ngClass]="getSortIconClass('email')"></i>
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div class="willow-table-header-content">Actions</div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of sortedUsers; let i = index" [ngClass]="{'willow-table-row-odd': i % 2 !== 0}">
            <td>{{ user.name }}</td>
            <td>
              <a [href]="'mailto:' + user.email" class="link">{{ user.email }}</a>
            </td>
            <td>
              <button class="willow-button willow-button-secondary" (click)="editUser(user)">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`,
  styles: [\`
    .willow-button {
      padding: 8px 16px;
      border-radius: var(--component-button-willow-layout-corner-radius, 2px);
      font-family: var(--text-family-body, Roboto);
      font-size: 14px;
      cursor: pointer;
      border: 2px solid;
      
      &.willow-button-secondary {
        background-color: var(--component-button-willow-secondary-dark-default-fill, #FFF);
        color: var(--component-button-willow-secondary-dark-default-stroke, #005589);
        border-color: var(--component-button-willow-secondary-dark-default-stroke, #005589);
        
        &:hover {
          background-color: var(--color-willow-blue---super-light, #F3F9FF);
        }
      }
    }
  \`]
})
export class CustomTableComponent {
  sortField: string | null = null;
  sortDirection: 'asc' | 'desc' | null = null;

  users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', email: 'bob.johnson@example.com' }
  ];

  sortedUsers = [...this.users];

  sort(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 
        this.sortDirection === 'desc' ? null : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }

    if (this.sortDirection === null) {
      this.sortedUsers = [...this.users];
    } else {
      this.sortedUsers = [...this.users].sort((a, b) => {
        const valueA = a[field as keyof typeof a];
        const valueB = b[field as keyof typeof b];
        const direction = this.sortDirection === 'asc' ? 1 : -1;
        
        return valueA.localeCompare(valueB) * direction;
      });
    }
  }

  getSortIconClass(field: string): string {
    if (this.sortField !== field || this.sortDirection === null) {
      return 'willow-table-sort-both';
    }
    return this.sortDirection === 'asc' ? 'willow-table-sort-up' : 'willow-table-sort-down';
  }

  editUser(user: any) {
    console.log('Edit user:', user);
  }
}
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