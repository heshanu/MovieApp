import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomizedMaterailModule} from '../shared/CustomizedMaterialModule';
import { HttpClientModule } from '@angular/common/http';
import { PopupComponent } from './home-page/popup/popup.component';
import { TicktingComponent } from './ticket/tickting/tickting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    PopupComponent,
    TicktingComponent
  ],
  imports: [
    CommonModule,
    ModuleRoutingModule,
    CustomizedMaterailModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ModuleModule { }
