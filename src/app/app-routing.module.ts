import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';

import { MenModule } from './men/men.module';
import { MenComponent } from './men/men.component';

import { WomenModule } from './women/women.module';
import { WomenComponent } from './women/women.component';

import { KidsModule } from './kids/kids.module';
import { KidsComponent } from './kids/kids.component';

import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'men', component: MenComponent},
  { path: 'women', component: WomenComponent},
  { path: 'kids', component: KidsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contacts', component: ContactsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    HomeModule,
    MenModule,
    WomenModule,
    KidsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
