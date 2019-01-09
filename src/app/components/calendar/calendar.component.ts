import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  fromDate: Date;
  endDate: Date;
  dateCtrl: FormControl;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.setTodaysDate(new Date());
    this.todoService.setDateRange(new Date());
    this.fromDate = this.todoService.getFromDate();
    this.endDate = this.todoService.getEndDate();
    this.dateCtrl = new FormControl('', [Validators.required]);
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const datePicked: Date = new Date(event.value);
    this.todoService.setDateRange(datePicked);
    this.fromDate = this.todoService.getFromDate();
    this.endDate = this.todoService.getEndDate();
  }
}
