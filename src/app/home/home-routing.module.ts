import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeAllComponent } from './home-all/home-all.component';
import { PantsComponent }    from './pants/pants.component';
import { TopsComponent } from './tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const homeRoutes: Routes = [
  {path: 'home', component: HomeComponent,
  children: [
    {path: 'all', component: HomeAllComponent},
    {path: 'pants', component: PantsComponent},
    {path: 'tops', component: TopsComponent},
    {path: 'accessories', component: AccessoriesComponent},
    {path: '', redirectTo: 'all', pathMatch: 'full'},
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
