import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenComponent } from './men.component';
import { MenAllComponent } from './men-all/men-all.component';
import { PantsComponent }    from './pants/pants.component';
import { TopsComponent } from './tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const menRoutes: Routes = [
  {path: 'men', component: MenComponent,
  children: [
    {path: 'all', component: MenAllComponent},
    {path: 'pants', component: PantsComponent},
    {path: 'tops', component: TopsComponent},
    {path: 'accessories', component: AccessoriesComponent},
    {path: '', redirectTo: 'all', pathMatch: 'full'},
  ]},
];
@NgModule({
  imports: [
    RouterModule.forChild(menRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenRoutingModule { }