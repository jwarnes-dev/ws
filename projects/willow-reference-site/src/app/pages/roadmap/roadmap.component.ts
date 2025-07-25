import { Component } from '@angular/core';
import { Column, Row } from '@wellmark/angular-willow';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {

  roadmapIntro = `
# Roadmap

Our development roadmap shows the current status of all components in the Willow Design System. We're continuously working to expand and improve our component library.

## Component Status Legend
- **Ready**: Component is production-ready with all necessary documentation and accessibility testing
- **Bugs logged**: Component is functional but has known issues being addressed
- **Beta**: Component is functional but may have breaking changes
- **In Development**: Component is currently being built
- **Design complete**: Component design is finalized, development not yet started
- **Planned**: Component is in the planning phase
- **Not planned**: Component is not currently on the roadmap
`;

  columns: Column[] = [
    { field: 'component', headerName: 'Component', width: 300, sortable: true },
    { field: 'status', headerName: 'Status', width: 150, sortable: true },
    { field: 'version', headerName: 'Version', width: 100, sortable: true }
  ];

  roadmapData: Row[] = [
    { component: 'Typography', status: 'Ready', version: '1.0.0' },
    { component: 'Colors', status: 'Ready', version: '1.0.0' },
    { component: 'Threaded Messages', status: 'Bugs logged', version: '0.9.1' },
    { component: 'Table', status: 'Bugs logged', version: '0.9.2' },
    { component: 'Button - Primary (Dark)', status: 'Beta', version: '0.8.0' },
    { component: 'Button - Outline/Secondary (Dark)', status: 'Beta', version: '0.8.0' },
    { component: 'Button - Destructive', status: 'Beta', version: '0.8.0' },
    { component: 'Text input', status: 'Beta', version: '0.7.5' },
    { component: 'Form validation services', status: 'Beta', version: '0.7.0' },
    { component: 'Button - Tertiary/Link (Dark)', status: 'Beta', version: '0.8.0' },
    { component: 'Alert - Error', status: 'Beta', version: '0.6.0' },
    { component: 'Radio', status: 'Beta', version: '0.7.0' },
    { component: 'Textarea', status: 'Beta', version: '0.7.0' },
    { component: 'Checkbox', status: 'Beta', version: '0.7.0' },
    { component: 'Select', status: 'Beta', version: '0.7.0' },
    { component: 'Card - white', status: 'Beta', version: '0.6.0' },
    { component: 'Table - sorting', status: 'Bugs logged', version: '0.9.0' },
    { component: 'Document Upload - no file preview', status: 'In Development', version: '0.3.0' },
    { component: 'Table - custom content (HTML)', status: 'In Development', version: '0.4.0' },
    { component: 'Table - pagination', status: 'In Development', version: '0.4.0' },
    { component: 'Tabs', status: 'Design complete', version: '0.1.0' },
    { component: 'Modal', status: 'Design complete', version: '0.1.0' },
    { component: 'Page loading spinner', status: 'Planned', version: '0.0.1' },
    { component: 'Link that reads as navigation', status: 'Planned', version: '0.0.1' },
    { component: 'Spacing standards', status: 'Planned', version: '0.0.1' },
    { component: 'Breakpoints', status: 'Planned', version: '0.0.1' },
    { component: 'Link', status: 'Not planned', version: '-' },
    { component: 'Button - Primary (Light)', status: 'Not planned', version: '-' },
    { component: 'Button - Secondary (Light)', status: 'Not planned', version: '-' },
    { component: 'Button - Tertiary/Link (Light)', status: 'Not planned', version: '-' },
    { component: 'Alert - Success', status: 'Not planned', version: '-' },
    { component: 'Alert - Warning', status: 'Not planned', version: '-' },
    { component: 'Alert - Information', status: 'Not planned', version: '-' },
    { component: 'Badges', status: 'Not planned', version: '-' },
    { component: 'Accordion', status: 'Not planned', version: '-' },
    { component: 'Progress bar', status: 'Not planned', version: '-' },
    { component: 'Tooltip', status: 'Not planned', version: '-' },
    { component: 'Search input', status: 'Not planned', version: '-' },
    { component: 'Small Buttons', status: 'Not planned', version: '-' },
    { component: 'Breadcrumbs', status: 'Not planned', version: '-' },
    { component: 'Tracker', status: 'Not planned', version: '-' },
    { component: 'Multi-select dropdown', status: 'Not planned', version: '-' },
    { component: 'Top Menu', status: 'Not planned', version: '-' },
    { component: 'Document Upload - with file previews', status: 'Not planned', version: '-' },
    { component: 'Accumulation module', status: 'Not planned', version: '-' },
    { component: 'Floating CTA', status: 'Not planned', version: '-' },
    { component: 'Footer layout', status: 'Not planned', version: '-' }
  ];

  constructor() { }
} 