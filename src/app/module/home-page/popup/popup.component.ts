import { Component, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
 
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
   });

  }
}