import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KidsComponent } from './kids.component';
import { KidsAllComponent } from './kids-all/kids-all.component';
import { PantsComponent } from './pants/pants.component';
import { TopsComponent } from './tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes = [
  {path: 'kids', component: KidsComponent,
  children: [
    {path: 'all', component: KidsAllComponent},
    {path: 'pants', component: PantsComponent},
    {path: 'tops', component: TopsComponent},
    {path: 'accessories', component: AccessoriesComponent},
    {path: '', redirectTo: 'all', pathMatch: 'full'},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule { }
