import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.scss']
})
export class BacklogComponent implements OnInit {
  fromDate: Date;
  constructor() { }

  ngOnInit() { }

}
