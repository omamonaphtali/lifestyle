import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenRoutingModule } from './women-routing.module';
import { WomenComponent } from './women.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PantsComponent } from './pants/pants.component';
import { TopsComponent } from './tops/tops.component';
import { WomenAllComponent } from './women-all/women-all.component';

@NgModule({
  imports: [
    CommonModule,
    WomenRoutingModule
  ],
  declarations: [
    WomenComponent,
    TopsComponent,
    AccessoriesComponent,
    PantsComponent,
    WomenAllComponent
  ]
})
export class WomenModule { }
