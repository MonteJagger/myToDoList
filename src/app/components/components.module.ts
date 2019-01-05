import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { TableComponent } from './table/table.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    ItemComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
