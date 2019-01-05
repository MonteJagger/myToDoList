import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekViewComponent } from './week-view/week-view.component';
import { BacklogComponent } from './backlog/backlog.component';
import { ThreeDayComponent } from './three-day/three-day.component';

const routes: Routes = [
  {
    path: '',
    component: WeekViewComponent
  },
  {
    path: 'week',
    component: WeekViewComponent
  },
  {
    path: 'backlog',
    component: BacklogComponent
  },
  {
    path: 'threeday',
    component: ThreeDayComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
