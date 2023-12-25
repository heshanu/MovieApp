import { Component, ViewChild } from '@angular/core';
import { FetchService } from '../../service/fetch.service';
import { Movie } from '../../shared/interface/movie';
import { log } from 'node:console';

@Component({
  selector: 'app-seatbooking',
  templateUrl: './seatbooking.component.html',
  styleUrl: './seatbooking.component.css'
})
export class SeatbookingComponent {
  movieList: Movie[] = [];

  selectedMovieName: string = "Avatar";
  
  constructor(private fetchService: FetchService) { 
    this.movieList = this.fetchService.movies; 
  }
  selectedMovieObj!:Movie;
 
  public onChangeAcccordingFilmName(movie:Movie):void {
    console.log(`this is two way binding`, this.selectedMovieName);
    alert(this.selectedMovieName);

    // const movieData = this.movieList.find((movie: Movie) => { 
    //   alert($event.target.value);
    //   return movie.Title=== $event.target.value;
    // })  
    // alert(movieData);

    // if(movieData) {
    //   this.selectedMovieObj = movieData;
    //   console.log(``,movieData);
    // }
        
  } 
}
