import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SeatbookingComponent } from './seatbooking/seatbooking.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'booking', component:SeatbookingComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  
  ],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
