import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { TodoService } from '../../todo.service';

// material stuff
import { MatTableDataSource, MatSort } from '@angular/material';
import { ToDoItem } from 'src/app/model/todo-item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  
  constructor(private todoService: TodoService) { }
  fromDate: Date;
  endDate: Date;


  // table
  listItems: ToDoItem[] = this.todoService.getMockData(); 
  
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


  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.fromDate = this.todoService.getFromDate();
    this.endDate = this.todoService.getEndDate();
    this.filterDates();
  }

  filterDates() {
    const filteredList = this.listItems.filter(
      item => item.dateCreated.getTime() >= this.fromDate.getTime() && item.dateCreated.getTime() >= this.endDate.getTime()
    );

    this.dataSource = new MatTableDataSource(this.listItems);
  }
}
