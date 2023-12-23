import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FetchService } from './service/fetch.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterailModule } from './shared/MaterialModule';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterailModule,
  ],
  providers: [
    FetchService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
