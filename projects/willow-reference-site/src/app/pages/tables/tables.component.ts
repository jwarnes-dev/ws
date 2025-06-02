import { Component } from '@angular/core';
import { TypographyVariant, Column, Row } from 'angular-willow';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  constructor() { }
  type = TypographyVariant;

  // Sample columns configuration
  columns: Column[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First Name', width: 130 },
    { field: 'lastName', headerName: 'Last Name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
    { field: 'email', headerName: 'Email', width: 200, sortable: false }
  ];

  // Sample rows data
  rows: Row[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: 'jon.snow@example.com' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: 'cersei.lannister@example.com' },
    { id: 3, lastName: 'Stark', firstName: 'Arya', age: 16, email: 'arya.stark@example.com' },
    { id: 4, lastName: 'Targaryen', firstName: 'Daenerys', age: 30, email: 'daenerys.targaryen@example.com' },
    { id: 5, lastName: 'Baratheon', firstName: 'Robert', age: 45, email: 'robert.baratheon@example.com' }

    
  ];
} 