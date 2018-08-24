import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WomenComponent } from './women.component';
import { WomenAllComponent } from './women-all/women-all.component';
import { PantsComponent } from './pants/pants.component';
import { TopsComponent } from './tops/tops.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes = [
  {path: 'women', component: WomenComponent,
  children: [
    {path: 'all', component: WomenAllComponent},
    {path: 'pants', component: PantsComponent},
    {path: 'tops', component: TopsComponent},
    {path: 'accessories', component: AccessoriesComponent},
    {path: '', redirectTo: 'all', pathMatch: 'full'}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenRoutingModule { }
