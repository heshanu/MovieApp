import { Component, ElementRef, ViewChild } from '@angular/core';
import { FetchService } from '../../service/fetch.service';
import { Movie } from '../../shared/interface/movie';

@Component({
  selector: 'app-seatbooking',
  templateUrl: './seatbooking.component.html',
  styleUrl: './seatbooking.component.css'
})
export class SeatbookingComponent {
  selectedMovieObj!: Movie;
  movieList: Movie[] = [];
  movieName!: string;
  movieNameDisplay: string = "Avatar";
  bookedSeatNoList: any[] = [];

  constructor(private fetchService: FetchService) { 
    this.movieList = this.fetchService.movies; 
  }

  public onChangeAcccordingFilmName(): void {
    this.movieNameDisplay = this.movieName;
    
    const movieData= this.movieList.find((movie: Movie) => {return movie.Title === this.movieNameDisplay});
    
    if (movieData != undefined) { 
      this.selectedMovieObj = movieData;
      console.log(``, movieData);
    }   
  } 

  public getSeatArray(totalSeats: number) { 
    let setArray: number[] = [];
    for (let i = 1; i <= totalSeats; i++) {
      setArray.push(i);
    }
    return setArray;
  }

  public bookSeat(rowName: string, seatNo: number) {
    const isDataExists = this.bookedSeatNoList.find((seatObj: any) => { return seatObj.rowName === rowName && seatObj.seatNo === seatNo });
    if (isDataExists == undefined) {
      this.bookedSeatNoList.push({ rowName: rowName, seatNo: seatNo });
      console.log(``,this.bookedSeatNoList);
    } else {
      this.bookedSeatNoList = this.bookedSeatNoList.filter((seatObj: any) => { return seatObj.rowName !== rowName && seatObj.seatNo !== seatNo });
    }
  }


  public checkIfSeatBooked(rowName: string, seatNo: number) { 
    const isDataExists = this.bookedSeatNoList.find((seatObj: any) => { return seatObj.rowName === rowName && seatObj.seatNo === seatNo });
    console.log(`isDataExits`,isDataExists);
    if (isDataExists == undefined) {
      return false;
    }
    return true;
  }

  

}
