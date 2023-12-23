import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: '',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  
  ],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
