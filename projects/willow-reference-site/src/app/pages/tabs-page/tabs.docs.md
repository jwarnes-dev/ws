# Willow Tabs Component

The Willow Tabs component provides a fully accessible, customizable tabbed interface that follows the WAI-ARIA design patterns and Willow design system specifications.

## Table of Contents

- [Features](#features)
- [Accessibility](#accessibility)
- [Basic Usage](#basic-usage)
- [Advanced Usage](#advanced-usage)
- [Custom HTML Tabs](#custom-html-tabs)
- [Customization & CSS Tokens](#customization--css-tokens)
- [API Reference](#api-reference)
- [WCAG Compliance](#wcag-compliance)

## Features

- **Full WAI-ARIA Support**: Implements all required ARIA attributes and keyboard navigation
- **Flexible Orientation**: Supports horizontal (default) and vertical tab layouts
- **Activation Modes**: Choose between automatic and manual tab activation
- **Icon Support**: FontAwesome icons with proper accessibility labels
- **Custom Templates**: Support for complex content using Angular templates
- **Responsive Design**: Adapts to different screen sizes and orientations
- **High Contrast Support**: Works with Windows High Contrast mode
- **RTL Support**: Right-to-left language support built-in
- **Keyboard Navigation**: Full keyboard support (Arrow keys, Home, End, Tab, Enter, Space)

## Accessibility

The Willow Tabs component meets WCAG 2.1 AA standards and implements the WAI-ARIA Tabs pattern:

### Keyboard Support

| Key | Function |
|-----|----------|
| Tab | Moves focus to the active tab in the tab list, then to the tab panel |
| Arrow Keys | Navigate between tabs (Left/Right for horizontal, Up/Down for vertical) |
| Home | Moves focus to the first tab |
| End | Moves focus to the last tab |
| Enter/Space | Activates the focused tab (in manual activation mode) |

### Screen Reader Support

- Each tab has appropriate `role="tab"` and is contained in a `role="tablist"`
- Tab panels have `role="tabpanel"` and are properly associated with their tabs
- Active tabs are announced with `aria-selected="true"`
- Disabled tabs are announced with `aria-disabled="true"`
- Tab counts and positions are automatically announced

### Focus Management

- Focus is properly managed when tabs are activated
- Visual focus indicators meet WCAG contrast requirements
- Focus is trapped within the tab component when navigating with keyboard

## Basic Usage

### Import the Module

```typescript
import { TabsComponent } from '@wellmark/angular-willow';

@Component({
  imports: [TabsComponent],
  // ... component definition
})
```

### Simple Tabs

```typescript
import { Component } from '@angular/core';
import { Tab } from '@wellmark/angular-willow';

@Component({
  selector: 'app-example',
  template: `
    <willow-tabs
      [tabs]="tabs"
      [selectedTabId]="selectedTabId"
      (tabChange)="onTabChange($event)">
    </willow-tabs>
  `
})
export class ExampleComponent {
  selectedTabId = 'tab1';
  
  tabs: Tab[] = [
    {
      id: 'tab1',
      label: 'First Tab',
      content: 'Content for the first tab'
    },
    {
      id: 'tab2',
      label: 'Second Tab',
      content: 'Content for the second tab'
    },
    {
      id: 'tab3',
      label: 'Third Tab',
      content: 'Content for the third tab'
    }
  ];

  onTabChange(tabId: string) {
    this.selectedTabId = tabId;
  }
}
```

### Tabs with Icons

```typescript
import { faHome, faUser, faSettings } from '@fortawesome/free-solid-svg-icons';

export class IconTabsComponent {
  tabs: Tab[] = [
    {
      id: 'home',
      label: 'Home',
      icon: faHome,
      content: 'Welcome to the home page'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: faUser,
      content: 'Your profile information'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: faSettings,
      content: 'Application settings'
    }
  ];
}
```

## Advanced Usage

### Vertical Tabs

```html
<willow-tabs
  [tabs]="tabs"
  orientation="vertical"
  [selectedTabId]="selectedTabId"
  (tabChange)="onTabChange($event)">
</willow-tabs>
```

### Manual Activation Mode

```html
<willow-tabs
  [tabs]="tabs"
  activationMode="manual"
  [selectedTabId]="selectedTabId"
  (tabChange)="onTabChange($event)">
</willow-tabs>
```

### Custom Templates

```typescript
@Component({
  template: `
    <willow-tabs
      [tabs]="customTabs"
      [selectedTabId]="selectedCustomTabId"
      (tabChange)="onCustomTabChange($event)">
      
      <ng-template willowTabPanel="custom1">
        <div class="custom-content">
          <h3>Custom Template 1</h3>
          <p>This content is rendered using a custom template.</p>
          <willow-button variant="primary">Click me</willow-button>
        </div>
      </ng-template>
      
      <ng-template willowTabPanel="custom2">
        <div class="custom-content">
          <h3>Custom Template 2</h3>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      </ng-template>
    </willow-tabs>
  `
})
export class CustomTemplateComponent {
  selectedCustomTabId = 'custom1';
  
  customTabs: Tab[] = [
    {
      id: 'custom1',
      label: 'Custom 1',
      icon: faCode
    },
    {
      id: 'custom2',
      label: 'Custom 2',
      icon: faList
    }
  ];

  onCustomTabChange(tabId: string) {
    this.selectedCustomTabId = tabId;
  }
}
```

### Disabled and Hidden Tabs

```typescript
tabs: Tab[] = [
  {
    id: 'available',
    label: 'Available',
    content: 'This tab is available'
  },
  {
    id: 'disabled',
    label: 'Disabled',
    content: 'This content is not accessible',
    disabled: true
  },
  {
    id: 'hidden',
    label: 'Hidden',
    content: 'This tab is hidden from the UI',
    hidden: true
  }
];
```

## Custom HTML Tabs

You can build your own tabs using the CSS classes provided in `willow-vars.scss`:

```html
<div class="willow-tabs-container" data-orientation="horizontal">
  <!-- Tab List -->
  <ul class="willow-tab-list" role="tablist" aria-label="Sample Tabs">
    <li role="presentation">
      <button class="willow-tab willow-tab-active" 
              role="tab" 
              aria-selected="true" 
              aria-controls="panel-1" 
              id="tab-1">
        <span class="willow-tab-text">Tab 1</span>
      </button>
    </li>
    <li role="presentation">
      <button class="willow-tab" 
              role="tab" 
              aria-selected="false" 
              aria-controls="panel-2" 
              id="tab-2">
        <span class="willow-tab-text">Tab 2</span>
      </button>
    </li>
    <li role="presentation">
      <button class="willow-tab willow-tab-disabled" 
              role="tab" 
              aria-selected="false" 
              aria-disabled="true" 
              aria-controls="panel-3" 
              id="tab-3">
        <span class="willow-tab-text">Disabled</span>
      </button>
    </li>
  </ul>

  <!-- Tab Panels -->
  <div class="willow-tab-panels">
    <div class="willow-tab-panel willow-tab-panel-active" 
         role="tabpanel" 
         aria-labelledby="tab-1" 
         id="panel-1">
      <div class="willow-tab-content">
        <h3>Panel 1 Content</h3>
        <p>This is the content for the first tab panel.</p>
      </div>
    </div>
    
    <div class="willow-tab-panel" 
         role="tabpanel" 
         aria-labelledby="tab-2" 
         id="panel-2">
      <div class="willow-tab-content">
        <h3>Panel 2 Content</h3>
        <p>This is the content for the second tab panel.</p>
      </div>
    </div>
    
    <div class="willow-tab-panel" 
         role="tabpanel" 
         aria-labelledby="tab-3" 
         id="panel-3">
      <div class="willow-tab-content">
        <h3>Panel 3 Content</h3>
        <p>This content is in a disabled tab.</p>
      </div>
    </div>
  </div>
</div>
```

### Vertical Custom Tabs

```html
<div class="willow-tabs-container" data-orientation="vertical">
  <!-- Same structure as above, but orientation changes the layout -->
</div>
```

### Custom JavaScript for HTML Tabs

```javascript
// Basic tab functionality for custom HTML tabs
class WillowHTMLTabs {
  constructor(container) {
    this.container = container;
    this.tabs = container.querySelectorAll('.willow-tab');
    this.panels = container.querySelectorAll('.willow-tab-panel');
    this.init();
  }

  init() {
    this.tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => this.activateTab(index));
      tab.addEventListener('keydown', (e) => this.handleKeyDown(e, index));
    });
  }

  activateTab(index) {
    // Remove active state from all tabs and panels
    this.tabs.forEach(tab => {
      tab.classList.remove('willow-tab-active');
      tab.setAttribute('aria-selected', 'false');
    });
    
    this.panels.forEach(panel => {
      panel.classList.remove('willow-tab-panel-active');
    });

    // Add active state to selected tab and panel
    this.tabs[index].classList.add('willow-tab-active');
    this.tabs[index].setAttribute('aria-selected', 'true');
    this.panels[index].classList.add('willow-tab-panel-active');
  }

  handleKeyDown(event, currentIndex) {
    let newIndex = currentIndex;
    
    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        newIndex = currentIndex > 0 ? currentIndex - 1 : this.tabs.length - 1;
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        newIndex = currentIndex < this.tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = this.tabs.length - 1;
        break;
      default:
        return;
    }
    
    event.preventDefault();
    this.tabs[newIndex].focus();
    this.activateTab(newIndex);
  }
}

// Initialize all tab containers
document.querySelectorAll('.willow-tabs-container').forEach(container => {
  new WillowHTMLTabs(container);
});
```

## Customization & CSS Tokens

You can customize the appearance of tabs by overriding CSS custom properties in your application:

### Available CSS Tokens

```css
:root {
  /* Spacing */
  --spacing-willow-4: 4px;
  --spacing-willow-8: 8px;
  --spacing-willow-12: 12px;
  --spacing-willow-16: 16px;
  
  /* Colors */
  --component-tabs-willow-stroke: #C2C2C3;
  --component-tabs-willow-background-active: #F3F9FF;
  --component-tabs-willow-background-hover: #F8F9FA;
  --component-tabs-willow-text-active: #4B4C4D;
  --component-tabs-willow-text-inactive: #6B6B6B;
  --component-tabs-willow-text-disabled: #C2C2C3;
  --component-tabs-willow-panel-background: #FFFFFF;
  
  /* Typography */
  --component-tabs-willow-font-size: 18px;
  --component-tabs-willow-font-weight-inactive: 400;
  --component-tabs-willow-font-weight-active: 500;
  --component-tabs-willow-line-height: 28px;
  
  /* Border */
  --component-tabs-willow-border-active-width: 3px;
  --component-tabs-willow-border-active-color: #005589;
}
```

### Customization Examples

#### Dark Theme

```css
:root {
  --component-tabs-willow-stroke: #404040;
  --component-tabs-willow-background-active: #1a1a1a;
  --component-tabs-willow-background-hover: #2a2a2a;
  --component-tabs-willow-text-active: #ffffff;
  --component-tabs-willow-text-inactive: #cccccc;
  --component-tabs-willow-panel-background: #1a1a1a;
  --component-tabs-willow-border-active-color: #0078d4;
}
```

#### Compact Spacing

```css
:root {
  --spacing-willow-8: 4px;
  --spacing-willow-12: 8px;
  --spacing-willow-16: 12px;
  --component-tabs-willow-font-size: 14px;
  --component-tabs-willow-line-height: 20px;
}
```

#### Custom Brand Colors

```css
:root {
  --component-tabs-willow-background-active: #e3f2fd;
  --component-tabs-willow-background-hover: #f3e5f5;
  --component-tabs-willow-border-active-color: #1976d2;
  --component-tabs-willow-text-active: #1976d2;
}
```

#### Larger Text for Accessibility

```css
:root {
  --component-tabs-willow-font-size: 20px;
  --component-tabs-willow-line-height: 32px;
  --spacing-willow-12: 16px;
  --spacing-willow-16: 20px;
}
```

## API Reference

### TabsComponent

#### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tabs` | `Tab[]` | `[]` | Array of tab definitions |
| `selectedTabId` | `string` | `''` | ID of the currently active tab |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Tab layout orientation |
| `activationMode` | `'automatic' \| 'manual'` | `'automatic'` | How tabs are activated |
| `ariaLabel` | `string` | `undefined` | Accessible label for the tab list |
| `ariaLabelledBy` | `string` | `undefined` | ID of element that labels the tab list |

#### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `tabChange` | `string` | Emits the ID of the newly selected tab |

#### Methods

| Method | Parameters | Description |
|--------|------------|-------------|
| `selectTab` | `tabId: string` | Programmatically select a tab |
| `selectNextTab` | `none` | Select the next available tab |
| `selectPreviousTab` | `none` | Select the previous available tab |
| `selectFirstTab` | `none` | Select the first available tab |
| `selectLastTab` | `none` | Select the last available tab |

### Tab Interface

```typescript
interface Tab {
  /** Unique identifier for the tab */
  id: string;
  
  /** The text label displayed on the tab */
  label: string;
  
  /** Optional Font Awesome icon */
  icon?: IconDefinition;
  
  /** Whether the tab is disabled */
  disabled?: boolean;
  
  /** Whether the tab is hidden (removes from DOM) */
  hidden?: boolean;
  
  /** Content to display in the tab panel */
  content?: any;
}
```

### TabPanelDirective

Used for custom template content:

```typescript
@Directive({
  selector: 'ng-template[willowTabPanel]'
})
```

#### Usage

```html
<ng-template willowTabPanel="tab-id">
  <!-- Custom content here -->
</ng-template>
```

## WCAG Compliance

The Willow Tabs component is designed to meet WCAG 2.1 Level AA compliance:

### Success Criteria Met

- **1.3.1 Info and Relationships**: Proper semantic structure and ARIA relationships
- **1.4.1 Use of Color**: Information is not conveyed by color alone
- **1.4.3 Contrast (Minimum)**: Text and background colors meet 4.5:1 contrast ratio
- **1.4.11 Non-text Contrast**: Focus indicators meet 3:1 contrast ratio
- **2.1.1 Keyboard**: All functionality available via keyboard
- **2.1.2 No Keyboard Trap**: Focus can move away from the component
- **2.4.3 Focus Order**: Focus order is logical and intuitive
- **2.4.7 Focus Visible**: Focus indicators are clearly visible
- **3.2.1 On Focus**: No unexpected context changes when receiving focus
- **4.1.2 Name, Role, Value**: All UI components have proper names, roles, and values
- **4.1.3 Status Messages**: Status changes are announced to screen readers

### Testing Recommendations

1. **Keyboard Testing**: Verify all functionality works with keyboard only
2. **Screen Reader Testing**: Test with NVDA, JAWS, and VoiceOver
3. **High Contrast Testing**: Verify appearance in Windows High Contrast mode
4. **Color Contrast Testing**: Verify all text meets WCAG contrast requirements
5. **Mobile Testing**: Test touch interactions and responsive behavior

### Accessibility Best Practices

1. **Always provide meaningful tab labels**: Use descriptive text that clearly indicates tab content
2. **Don't rely on color alone**: Use icons or text in addition to color for important states
3. **Test with real users**: Include users with disabilities in your testing process
4. **Provide skip links**: Allow users to skip over tabs if they're not the main content
5. **Use semantic HTML**: The component uses proper ARIA attributes, but ensure surrounding content is also semantic

For more information on WCAG compliance, visit the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/).
