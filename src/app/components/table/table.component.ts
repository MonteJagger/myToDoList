import { Component, OnInit, ViewChild } from '@angular/core';
import { LISTITEMS } from 'src/app/model/mock-date';

// material stuff
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  listItems = LISTITEMS; // mock data
  displayedColumns: string[] = [
    'toDo', 
    'isProgress', 
    'isCompleted', 
    'dateCreated', 
    'dateProgressStart', 
    'dateCompletion', 
    'forDay'
  ];
  dataSource = new MatTableDataSource(this.listItems);

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
