import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';

import { KidsComponent } from './kids.component';
import { KidsAllComponent } from './kids-all/kids-all.component';
import { PantsComponent } from './pants/pants.component';
import { TopsComponent } from './tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  imports: [
    CommonModule,
    KidsRoutingModule
  ],
  declarations: [
    PantsComponent,
    KidsComponent,
    KidsAllComponent,
    TopsComponent,
    AccessoriesComponent
  ]
})
export class KidsModule { }
