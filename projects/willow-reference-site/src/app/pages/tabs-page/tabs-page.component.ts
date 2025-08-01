import { Component, ViewChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularWillowModule } from '@wellmark/angular-willow';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faUser, faCog, faCode, faList, faInfo, faHeart, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// Define Tab interface locally since import is not working
interface Tab {
  id: string;
  label: string;
  icon?: any;
  content?: string;
  template?: TemplateRef<any>;
  disabled?: boolean;
  hidden?: boolean;
  ariaLabel?: string;
}

@Component({
  selector: 'app-tabs-page',
  standalone: true,
  imports: [CommonModule, AngularWillowModule, FontAwesomeModule],
  templateUrl: './tabs-page.component.html',
  styleUrl: './tabs-page.component.scss'
})
export class TabsPageComponent {
  @ViewChild('customTemplate1', { static: true }) customTemplate1!: TemplateRef<any>;
  @ViewChild('customTemplate2', { static: true }) customTemplate2!: TemplateRef<any>;
  @ViewChild('customTemplate3', { static: true }) customTemplate3!: TemplateRef<any>;

  // Font Awesome icons
  faHome = faHome;
  faUser = faUser;
  faCog = faCog;
  faCode = faCode;
  faList = faList;
  faInfo = faInfo;
  faHeart = faHeart;
  faWarning = faExclamationTriangle;

  // Typography enum reference for templates
  type = {
    Body: 'body',
    Heading1: 'h1',
    Heading2: 'h2',
    Heading3: 'h3',
    Heading4: 'h4'
  };

  // Basic tabs
  selectedTabId = 'home';
  selectedBasicTabId = 'home';
  basicTabs: Tab[] = [
    {
      id: 'home',
      label: 'Home',
      content: 'Welcome to the home section. This is a simple text-based tab content.'
    },
    {
      id: 'about',
      label: 'About',
      content: 'Learn more about our services and what we offer to our customers.'
    },
    {
      id: 'contact',
      label: 'Contact',
      content: 'Get in touch with us through our various contact methods.'
    }
  ];

  // Tabs with icons
  selectedIconTabId = 'dashboard';
  iconTabs: Tab[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: this.faHome,
      content: '<h3>Dashboard Overview</h3><p>Your personal dashboard with key metrics and recent activity.</p><ul><li>Active projects: 5</li><li>Pending tasks: 12</li><li>Recent updates: 3</li></ul>'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: this.faUser,
      content: '<h3>User Profile</h3><p>Manage your account settings and personal information.</p><p><strong>Account Status:</strong> Active</p><p><strong>Member Since:</strong> January 2024</p>'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: this.faCog,
      content: '<h3>Application Settings</h3><p>Configure your preferences and application behavior.</p><p>Customize themes, notifications, and privacy settings to match your workflow.</p>'
    }
  ];

  // Vertical tabs
  selectedVerticalTabId = 'overview';
  verticalTabs: Tab[] = [
    {
      id: 'overview',
      label: 'Overview',
      icon: this.faInfo,
      content: '<h3>System Overview</h3><p>A comprehensive view of your system status and performance metrics.</p>'
    },
    {
      id: 'configuration',
      label: 'Configuration',
      icon: this.faCog,
      content: '<h3>System Configuration</h3><p>Manage system-wide settings and configurations.</p><ul><li>Server settings</li><li>Database configuration</li><li>Security policies</li></ul>'
    },
    {
      id: 'maintenance',
      label: 'Maintenance',
      icon: this.faWarning,
      content: '<h3>System Maintenance</h3><p>Schedule and manage system maintenance tasks.</p><p><em>Next scheduled maintenance: Tomorrow at 2:00 AM</em></p>'
    }
  ];

  // Manual activation tabs
  selectedManualTabId = 'tab1';
  manualTabs: Tab[] = [
    {
      id: 'tab1',
      label: 'Manual Tab 1',
      content: 'This tab uses manual activation mode. You must press Enter or Space to activate after focusing.'
    },
    {
      id: 'tab2',
      label: 'Manual Tab 2',
      content: 'Navigate with arrow keys, then press Enter or Space to activate this tab.'
    },
    {
      id: 'tab3',
      label: 'Manual Tab 3',
      content: 'Manual activation provides more control over tab selection for users with motor disabilities.'
    }
  ];

  // Custom template tabs
  selectedCustomTabId = 'components';
  customTabs: Tab[] = [
    {
      id: 'components',
      label: 'Components',
      icon: this.faCode
    },
    {
      id: 'features',
      label: 'Features',
      icon: this.faList
    },
    {
      id: 'testimonials',
      label: 'Testimonials',
      icon: this.faHeart
    }
  ];

  // Disabled and mixed tabs
  selectedMixedTabId = 'available';
  mixedTabs: Tab[] = [
    {
      id: 'available',
      label: 'Available',
      content: 'This tab is fully accessible and available for interaction.'
    },
    {
      id: 'disabled',
      label: 'Disabled Tab',
      content: 'This content is not accessible due to the tab being disabled.',
      disabled: true
    },
    {
      id: 'another',
      label: 'Another Tab',
      content: 'This is another available tab to demonstrate mixed states.'
    },
    {
      id: 'hidden',
      label: 'Hidden Tab',
      content: 'This tab is hidden from the interface.',
      hidden: true
    }
  ];

  // Event handlers
  onTabChange(tabId: string) {
    this.selectedTabId = tabId;
  }

  onIconTabChange(tabId: string) {
    this.selectedIconTabId = tabId;
  }

  onVerticalTabChange(tabId: string) {
    this.selectedVerticalTabId = tabId;
  }

  onManualTabChange(tabId: string) {
    this.selectedManualTabId = tabId;
  }

  onCustomTabChange(tabId: string) {
    this.selectedCustomTabId = tabId;
  }

  onMixedTabChange(tabId: string) {
    this.selectedMixedTabId = tabId;
  }

  onBasicTabChange(tabId: string) {
    this.selectedBasicTabId = tabId;
  }

  onTemplateTabChange(tabId: string) {
    this.selectedTemplateTabId = tabId;
  }

  onDisabledTabChange(tabId: string) {
    this.selectedDisabledTabId = tabId;
  }

  // Template methods
  updateTime() {
    this.currentTime = new Date();
  }

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

  // Custom HTML tabs functionality
  customHtmlSelectedTab = 'html-tab1';
  customSelectedTab = 'custom1';

  // Template data
  currentTime = new Date();
  counter = 0;

  // Additional tab sets for template
  selectedTemplateTabId = 'template1';
  templateTabs: Tab[] = [
    {
      id: 'template1',
      label: 'Dynamic Content',
      template: this.customTemplate1
    },
    {
      id: 'template2', 
      label: 'Interactive Demo',
      template: this.customTemplate2
    }
  ];

  selectedDisabledTabId = 'available';
  disabledTabs: Tab[] = [
    {
      id: 'available',
      label: 'Available',
      content: '<h3>Available Content</h3><p>This tab is fully functional and accessible to all users.</p>'
    },
    {
      id: 'disabled',
      label: 'Disabled',
      content: '<h3>Restricted Content</h3><p>This content is temporarily unavailable.</p>',
      disabled: true
    },
    {
      id: 'hidden',
      label: 'Hidden',
      content: '<h3>Hidden Content</h3><p>This tab is hidden from view.</p>',
      hidden: true
    }
  ];

  // Code examples for display
  basicExample = `<willow-tabs
  [tabs]="basicTabs"
  [selectedTabId]="selectedBasicTabId"
  (selectedTabChange)="onBasicTabChange($event)">
</willow-tabs>`;

  iconExample = `<willow-tabs
  [tabs]="iconTabs"
  [selectedTabId]="selectedIconTabId"
  (selectedTabChange)="onIconTabChange($event)">
</willow-tabs>`;

  verticalExample = `<willow-tabs
  [tabs]="verticalTabs"
  [selectedTabId]="selectedVerticalTabId"
  orientation="vertical"
  (selectedTabChange)="onVerticalTabChange($event)">
</willow-tabs>`;

  manualExample = `<willow-tabs
  [tabs]="manualTabs"
  [selectedTabId]="selectedManualTabId"
  activationMode="manual"
  (selectedTabChange)="onManualTabChange($event)">
</willow-tabs>`;

  templateExample = `<willow-tabs
  [tabs]="templateTabs"
  [selectedTabId]="selectedTemplateTabId"
  (selectedTabChange)="onTemplateTabChange($event)">
</willow-tabs>`;

  disabledExample = `<willow-tabs
  [tabs]="disabledTabs"
  [selectedTabId]="selectedDisabledTabId"
  (selectedTabChange)="onDisabledTabChange($event)">
</willow-tabs>`;

  customHtmlExample = `<div class="willow-tabs" role="tablist">
  <button class="willow-tab" 
          [class.willow-tab--active]="selectedTab === 'tab1'"
          role="tab" 
          (click)="selectedTab = 'tab1'">
    Tab 1
  </button>
</div>`;

  cssCustomizationExample = `.custom-theme {
  --willow-tabs-bg: var(--willow-color-primary-50);
  --willow-tab-color: var(--willow-color-primary-700);
}`;

  selectCustomHtmlTab(tabId: string, event: Event) {
    event.preventDefault();
    this.customHtmlSelectedTab = tabId;

    // Update ARIA attributes
    const buttons = document.querySelectorAll('.custom-html-tabs .willow-tab');
    const panels = document.querySelectorAll('.custom-html-tabs .willow-tab-panel');

    buttons.forEach(button => {
      button.classList.remove('willow-tab-active');
      button.setAttribute('aria-selected', 'false');
    });

    panels.forEach(panel => {
      panel.classList.remove('willow-tab-panel-active');
    });

    // Activate selected tab
    const activeButton = document.querySelector(`#${tabId}-button`);
    const activePanel = document.querySelector(`#${tabId}-panel`);

    if (activeButton && activePanel) {
      activeButton.classList.add('willow-tab-active');
      activeButton.setAttribute('aria-selected', 'true');
      activePanel.classList.add('willow-tab-panel-active');
    }
  }

  handleCustomKeyDown(event: KeyboardEvent, currentTabId: string) {
    const tabs = ['html-tab1', 'html-tab2', 'html-tab3'];
    const currentIndex = tabs.indexOf(currentTabId);
    let newIndex = currentIndex;

    switch (event.key) {
      case 'ArrowLeft':
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        break;
      case 'ArrowRight':
        newIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        break;
      case 'Home':
        newIndex = 0;
        break;
      case 'End':
        newIndex = tabs.length - 1;
        break;
      case 'Enter':
      case ' ':
        this.selectCustomHtmlTab(currentTabId, event);
        return;
      default:
        return;
    }

    event.preventDefault();
    const nextTab = document.querySelector(`#${tabs[newIndex]}-button`) as HTMLElement;
    if (nextTab) {
      nextTab.focus();
    }
  }

  // Utility methods for demo
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'active': return 'badge-success';
      case 'pending': return 'badge-warning';
      case 'inactive': return 'badge-secondary';
      default: return 'badge-primary';
    }
  }

  onButtonClick(action: string, data?: any) {
    console.log(`Action: ${action}`, data);
    // In a real application, you would handle these actions appropriately
  }
}
