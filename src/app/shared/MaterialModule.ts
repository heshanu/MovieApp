import { NgModule } from "@angular/core";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet'; 
import { MatButtonModule } from '@angular/material/button'; 
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card'; 


@NgModule({
    exports: [
        MatSlideToggleModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatCardModule
    ]
})
export class MaterailModule { }