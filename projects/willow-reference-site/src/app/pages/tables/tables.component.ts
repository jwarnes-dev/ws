import { Component, TemplateRef, ViewChild } from '@angular/core';
import { TypographyVariant, Column, Row } from '@wellmark/angular-willow';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  standalone: false
})
export class TablesComponent {
  @ViewChild('statusTemplate', { static: true }) statusTemplate!: TemplateRef<any>;
  @ViewChild('actionTemplate', { static: true }) actionTemplate!: TemplateRef<any>;
  @ViewChild('progressTemplate', { static: true }) progressTemplate!: TemplateRef<any>;
  @ViewChild('priorityTemplate', { static: true }) priorityTemplate!: TemplateRef<any>;

  constructor() { }
  type = TypographyVariant;

  // Basic table columns configuration
  columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'email', headerName: 'Email', width: 200, sortable: false }
  ];

  // Basic table rows data
  rows: Row[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon.snow@example.com' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei.lannister@example.com' },
    { id: 3, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya.stark@example.com' },
    { id: 4, lastName: 'Targaryen', firstName: 'Daenerys', age: 30, email: 'daenerys.targaryen@example.com' },
    { id: 5, lastName: 'Baratheon', firstName: 'Robert', age: 45, email: 'robert.baratheon@example.com' }
  ];

  // Advanced table with custom templates
  advancedColumns: Column[] = [
    { field: 'taskId', headerName: 'Task ID', width: 80 },
    { field: 'title', headerName: 'Task Title', width: 200 },
    { field: 'assignee', headerName: 'Assignee', width: 130 },
    { field: 'priority', headerName: 'Priority', width: 120, templateKey: 'priority' },
    { field: 'status', headerName: 'Status', width: 120, templateKey: 'status' },
    { field: 'progress', headerName: 'Progress', width: 150, templateKey: 'progress', sortable: false },
    { field: 'actions', headerName: 'Actions', width: 200, templateKey: 'actions', sortable: false }
  ];

  advancedRows: Row[] = [
    {
      taskId: 'TSK-001',
      title: 'Implement user authentication',
      assignee: 'John Doe',
      priority: 'high',
      status: 'in-progress',
      progress: 75,
      dueDate: '2024-02-15'
    },
    {
      taskId: 'TSK-002',
      title: 'Design dashboard mockups',
      assignee: 'Jane Smith',
      priority: 'medium',
      status: 'completed',
      progress: 100,
      dueDate: '2024-02-10'
    },
    {
      taskId: 'TSK-003',
      title: 'Set up CI/CD pipeline',
      assignee: 'Bob Johnson',
      priority: 'low',
      status: 'pending',
      progress: 0,
      dueDate: '2024-02-20'
    },
    {
      taskId: 'TSK-004',
      title: 'Write API documentation',
      assignee: 'Alice Brown',
      priority: 'high',
      status: 'in-progress',
      progress: 45,
      dueDate: '2024-02-18'
    },
    {
      taskId: 'TSK-005',
      title: 'Optimize database queries',
      assignee: 'Charlie Wilson',
      priority: 'medium',
      status: 'review',
      progress: 90,
      dueDate: '2024-02-12'
    }
  ];

  // Custom table data using pure CSS classes
  customTableData = [
    { name: 'Product Alpha', category: 'Software', price: '$299.99', availability: 'In Stock' },
    { name: 'Product Beta', category: 'Hardware', price: '$149.99', availability: 'Limited' },
    { name: 'Product Gamma', category: 'Service', price: '$49.99', availability: 'Available' },
    { name: 'Product Delta', category: 'Software', price: '$199.99', availability: 'Out of Stock' }
  ];

  // Cell template configurations
  get cellTemplates() {
    return {
      'status': this.statusTemplate,
      'actions': this.actionTemplate,
      'progress': this.progressTemplate,
      'priority': this.priorityTemplate
    };
  }

  // Event handlers
  onEdit(row: Row): void {
    console.log('Edit clicked for:', row);
    alert(`Editing task: ${row['title']}`);
  }

  onDelete(row: Row): void {
    console.log('Delete clicked for:', row);
    if (confirm(`Are you sure you want to delete task: ${row['title']}?`)) {
      const index = this.advancedRows.findIndex(r => r['taskId'] === row['taskId']);
      if (index > -1) {
        this.advancedRows.splice(index, 1);
      }
    }
  }

  onView(row: Row): void {
    console.log('View clicked for:', row);
    alert(`Viewing details for task: ${row['title']}\nAssignee: ${row['assignee']}\nDue Date: ${row['dueDate']}`);
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'high': return 'badge-high-priority';
      case 'medium': return 'badge-medium-priority';
      case 'low': return 'badge-low-priority';
      default: return '';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed': return 'badge-success';
      case 'in-progress': return 'badge-info';
      case 'review': return 'badge-warning';
      case 'pending': return 'badge-secondary';
      default: return 'badge-secondary';
    }
  }
} 