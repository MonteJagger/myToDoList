import { Injectable } from '@angular/core';
import { LISTITEMS } from './model/mock-date';
import { ToDoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todaysDate: Date;
  fromDate: Date;
  endDate: Date;

  constructor() { }

  getMockData(): ToDoItem[] {
    return LISTITEMS;
  }

  getTodaysDate(): Date {
    return this.todaysDate;
  }
  setTodaysDate(date: Date) {
    this.todaysDate = date;
  }

  getFromDate(): Date {
    return this.fromDate;
  }
  setFromDate(date: Date) {
    this.fromDate = date;
  }

  getEndDate() {
    return this.endDate
  }

  setDateRange(datePicked: Date) {
    const day: number = datePicked.getDay();
    let time: number = datePicked.getTime();

    if (day === 1) { // if Monday stay the same
      time = time
    }
    else if (day === 2) { // if Tuesday go to back to Monday
      time = time - 86400000 * 1;
    }
    else if (day === 3) { // if Wednesday go to back to Monday
      time = time - 86400000 * 2;
    }
    else if (day === 4) { // if Thursday go to back to Monday
      time = time - 86400000 * 3;
    }
    else if (day === 5) { // if Friday go to back to Monday
      time = time - 86400000 * 4;
    }
    else if (day === 6) { // if Saturday go to back to Monday
      time = time - 86400000 * 5;
    }
    else { // if Sunday go back to Monday
      time = time - 86000000 * 6;
    }

    this.fromDate = new Date(time);
    this.endDate = new Date(time + 86400000 * 6);
  }
}
