import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DownloadService } from './service/download.service';
import { GlobalService } from './service/global.service';
import { HashLocationStrategy, PathLocationStrategy, LocationStrategy, CommonModule, APP_BASE_HREF } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
import { OwlModule } from 'ngx-owl-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OwlModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },GlobalService, DownloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
