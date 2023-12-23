import { Component, Input, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Movie } from '../../../shared/interface/movie';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
  
export class PopupComponent {
 
  @Input() selectedMovie!:Movie;  
  constructor(public dialog: MatDialog) {} 
  
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
   });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html'
})
export class DialogContentExampleDialog {}