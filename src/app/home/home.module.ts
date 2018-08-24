import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeAllComponent } from './home-all/home-all.component';
import { PantsComponent } from './pants/pants.component';

import { HomeRoutingModule } from './home-routing.module';
import { TopsComponent } from './tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    PantsComponent,
    HomeComponent,
    HomeAllComponent,
    TopsComponent,
    AccessoriesComponent
  ]
})
export class HomeModule { }
