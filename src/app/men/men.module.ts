import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenRoutingModule } from './men.routing-module';

import { MenComponent } from './men.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PantsComponent } from './pants/pants.component';
import { TopsComponent } from './tops/tops.component';
import { MenAllComponent } from './men-all/men-all.component';

@NgModule({
  imports: [
    CommonModule,
    MenRoutingModule
  ],
  declarations: [
    MenComponent,
    TopsComponent,
    AccessoriesComponent,
    PantsComponent,
    MenAllComponent
  ]
})
export class MenModule { }
