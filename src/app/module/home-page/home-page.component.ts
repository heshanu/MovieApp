import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FetchService } from '../../service/fetch.service';
import { Movie } from '../../shared/interface/movie';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
  
export class HomePageComponent {
  selectedMovie:Movie= this.movie.movies[0];
  isShowPopup: boolean = false; 

  constructor(private movie: FetchService,public dialog: MatDialog) {
    this.getMovie();
  } 

  movieList: Movie[] = [];
  
  public getMovie(): void {
    this.movieList = this.movie.movies;
    //console.log(typeof (this.movieList));
  }

  public onSelectMovie(movie: Movie): void { 
    this.selectedMovie = movie;
    console.log(this.selectedMovie);
  }

}

