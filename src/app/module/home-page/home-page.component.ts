import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FetchService } from '../../service/fetch.service';
import { Movie } from '../../shared/interface/movie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private movie: FetchService) {
    this.getMovie();
  } 
  
  movieList: Movie[] = [];
  
  public getMovie(): void {
    this.movieList = this.movie.movies;
    console.log(typeof (this.movieList));
  }
}

