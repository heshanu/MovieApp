import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterailModule } from '../shared/MaterialModule';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    MaterailModule,
    HttpClientModule,    
  ]
})
export class ModuleModule { }
