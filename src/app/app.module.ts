import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MenModule } from './men/men.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WomenModule } from './women/women.module';
import { KidsModule } from './kids/kids.module';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProductsService } from './shared/products.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GalleryComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MenModule,
    WomenModule,
    KidsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
