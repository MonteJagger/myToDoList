import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { WeekViewComponent } from './week-view/week-view.component';
import { BacklogComponent } from './backlog/backlog.component';
import { ThreeDayComponent } from './three-day/three-day.component';
import { TableComponent } from '../components/table/table.component';
import { MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    WeekViewComponent,
    BacklogComponent,
    ThreeDayComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,

    // material
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class ViewsModule { }
