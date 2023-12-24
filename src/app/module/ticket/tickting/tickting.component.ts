import { Component } from '@angular/core';

@Component({
  selector: 'app-tickting',
  templateUrl: './tickting.component.html',
  styleUrl: './tickting.component.css'
})
export class TicktingComponent {
  ticketCount!:number;
  
  onSubmit(event: any) {
    console.log(``, this.ticketCount);
   return event.target.ticketCount.value;
}
}
