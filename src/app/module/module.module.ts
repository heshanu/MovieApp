import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomizedMaterailModule} from '../shared/CustomizedMaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './home-page/popup/popup.component';

@NgModule({
  declarations: [
    HomePageComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    CustomizedMaterailModule,
    HttpClientModule
  ]
})
export class ModuleModule { }
